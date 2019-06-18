import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale' //elementUI的国际化
import messages from './langs'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.LANG || 'cn', //默认的语言cn中文, 或从缓存中读取
  messages
})
locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n