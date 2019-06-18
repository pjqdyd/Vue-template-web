//封装处理localstorage缓存的工具, 并导出模块为db
let db = {
    save (key, value) {
      localStorage.setItem(key, value)
    },
    get (key, defaultValue = {}) {
      return localStorage.getItem(key) || defaultValue
    },
    remove (key) {
      localStorage.removeItem(key)
    },
    clear () {
      localStorage.clear()
    }
  }
  
  export default db