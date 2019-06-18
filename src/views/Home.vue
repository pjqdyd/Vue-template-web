<!-- 主页 -->
<template>
  <div>
    <nav-menu></nav-menu>
    <el-button type="primary" @click="switchLang('cn')">切换中文</el-button>
    <el-button type="primary" @click="switchLang('en')">切换英文</el-button>
    <p>{{$t('lang.hello')}}</p>
  </div>
</template>

<script>
import NavMenu from "@/views/nav-menu/NavMenu.vue"; //导航栏组件

export default {
  components: {
    NavMenu
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$t('lang.hello'))
  },
  methods: {
    //更改语言 val值'cn'或'en'
    switchLang(val) {
      this.$store.commit('setLang', val) //保存语言设置
      this.$i18n.locale = val;           //切换语言
    }
  }
};
</script>

<style lang='scss' scoped>
</style>