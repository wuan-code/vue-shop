import axios from 'axios'
import QS from 'qs'
import apiConfig from './../config'
import jwtToken from './../tool/jwt-token'


import router from '@/router'


/**
 * 设置请求头
 * @type {AxiosInstance}
 */
const service = axios.create({
  timeout: apiConfig['timeout'],
  baseURL: apiConfig['baseURL'],
})


service.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Access-Control-Allow-Origin',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Credentials': 'true',
}

/**
 * http request 拦截器
 */
service.interceptors.request.use(
  request => {
    if (jwtToken.getToken()) {
      request.headers.Authorization = 'Bearer ' + jwtToken.getToken()
    }

    // 参数格式转换
    if (['post', 'put', 'delete'].includes(request.method)) {
      request.data = QS.stringify(request.data);
    }
    return request
  }, error => {
    return Promise.reject(error)
  })


/**
 * http response 拦截器
 */
service.interceptors.response.use(response => {
  // 失败的返回数据
  if (response.data.status === 'error') {
    return Promise.reject(response.data)
  }

  // 登录失效，跳转到首页
  if (response.data.code === 401) {
    jwtToken.removeToken()
    router.push('/Login')
  }

  return response.data

}, error => {
  let message = '网络传输错误，请刷新重试'
  if (error.response) {
    switch (error.response.status) {
      case 404:
        message = '请求地址错误'
        break
      case 422:
        message = '请求出错'
        break
      case 500:
        message = '网络传输错误，请刷新重试'
        break
    }
  }
  let Response = {
    'msg': message,
    'code': error.response.status
  }
  return Promise.reject(Response)
})

export default service
