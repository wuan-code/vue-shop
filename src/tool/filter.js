/**
 * 时间转化
 * @export
 * @param {any} time 输入需要转化的时间参数
 * @param {any} format 需要转化的格式
 * @returns 返回处理后的时间格式
 */
export const dateFormat = (times, format) => {
  let time = Date.parse(times)
  const between = (Date.now() - Number(time)) / 1000
  if (between < 3600 && ((between / 60) < 1)) {
    return '刚刚'
  } else if (between < 3600) {
    return pluralize(~~(between / 60), '分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '小时')
  }
  if (!time) return null
  var date = new Date(time)
  var o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    'S': date.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

function pluralize(time, label) {
  return time + label + '以前'
}

/**
 * 文字长度过滤
 * @param text
 * @param length
 * @returns {string}
 */
export const text = (text, length = text.lenth) => {
  const cansub = text && text.length > length
  return cansub ? text.substr(0, length) + '...' : text
}


/**
 * 验证数组是否有空值
 * @param data
 * @note for...of 遍历
 *                Object.values() 和 Object.keys() 方法
 */
export const validateArray = data => {
  let result = true
  for (let value of Object.values(data)) {
    if (!value) {
      result = false
      break
    }
  }
  return result
}

/**
 * 过滤手机号码
 * @param phone
 * @returns {string}
 */
export const formatPhone = phone => {
  if (phone) {
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
  }
  return phone
}


/**
 * 过滤手机号码
 * @param phone
 * @returns {string}
 */
export const formatAllPhone = phone => {
  let newPhone = phone.toString()
  return newPhone.substr(0, 3) + '********';
}
