import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/utils/localstorage' //导入持久化缓存工具

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    lang: db.get('LANG') //语言默认从缓存数据中获取
  },
  mutations: {
    setLang(state, val){ //设置保存语言的方法
        db.save("LANG", val)
        state.lang = val
    }
  },
  actions: {}
})
