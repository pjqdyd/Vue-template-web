<!-- 顶部导航菜单 -->
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">第2页</el-menu-item>
      <el-menu-item index="3">第3页</el-menu-item>
      <el-menu-item index="4">第4页</el-menu-item>
      <el-menu-item index="5">第5页</el-menu-item>

      <lang-picker></lang-picker>
      <theme-picker></theme-picker>
      
    </el-menu>
  </div>
</template>

<script>
import LangPicker from '@/components/lang-picker/index.vue'; //语言选择插件
import ThemePicker from "@/components/theme-picker/index.vue"; //主题选择插件


export default {
  components:{
    LangPicker,
    ThemePicker
  },
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style lang='scss' scoped>
.nav-menu {
  background-image: linear-gradient(
    135deg,
    #5151e5 10%,
    rgba(114, 237, 242, 0.5) 100%
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right:15px;
}
</style>