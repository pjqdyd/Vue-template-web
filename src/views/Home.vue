<!-- 主页 -->
<template>
  <div>
    <nav-menu></nav-menu>
    <el-button type="primary" @click="switchChinese()">切换中文</el-button>
    <el-button type="primary" @click="switchEnlish()">切换英文</el-button>
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
    return {
    };
  },
  mounted() {},
  methods: {
    switchChinese() {
      this.$i18n.locale = "cn";
    },
    switchEnlish() {
      this.$i18n.locale = "en";
    }
  }
};
</script>

<style lang='scss' scoped>
</style>