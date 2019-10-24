import Vuex from 'vuex'
import db from '@/utils/localstorage' //导入持久化缓存工具


export default new Vuex.Store({
  namespaced: true,
  state: {
    lang: db.get('LANG'), //语言默认从缓存数据中获取
    theme: db.get('THEME') //主题色默认从缓存中读取
  },
  mutations: {
    setLang(state, val){ //设置保存语言的方法
        db.save("LANG", val)
        state.lang = val
    },
    setTheme(state, val){ //设置保存主题颜色的方法
      db.save("THEME", val)
      state.theme = val
    }
  },
  actions: {}
})
