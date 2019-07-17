<!-- 主页 -->
<template>
  <div>
    <nav-menu></nav-menu>
    <page-one></page-one>
    <page-two></page-two>
  </div>
</template>

<script>
import NavMenu from "@/views/nav-menu/NavMenu.vue"; //导航栏组件
import PageOne from "@/views/page-1/PageOne"; //第一页
import PageTwo from "@/views/page-2/PageTwo"; //第二页

export default {
  components: {
    NavMenu,
    PageOne,
    PageTwo
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.$t("lang.hello"));
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
</style>