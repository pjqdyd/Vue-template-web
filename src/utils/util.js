export const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  err.msg = msg
  return err
}


// 日期格式转换
export const formatDateTime = (date) => {
  let dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}