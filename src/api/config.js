// const baseURL = 'http://server.api.yb/api/'
const baseURL = 'https://easy-mock.com/mock/5cb6c6aeec4e9324bcb0c396/api/'

module.exports = {
  /* -----------------------------  基础配置  -------------------------------- */

  cdnUrl: '',
  baseURL: baseURL,
  timeout: 5000,

  /* ------------------------------------------------------------------------ */


  /* -------------------------------  弹框  --------------------------------- */

  errorMsg: '网络异常，请刷新页面',
  errorType: 'error',
  successMsg:'操作成功',
  successType: 'success',
  warningType: 'warning',

  /* ------------------------------------------------------------------------ */


  /* -------------------------------  路由  --------------------------------- */

  login: baseURL + 'login',
  logout: baseURL + 'logout',

  /* ------------------------------------------------------------------------ */


}