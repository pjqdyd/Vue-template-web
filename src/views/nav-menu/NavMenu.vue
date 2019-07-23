<!-- 顶部导航菜单 -->
<template>
  <div>
    <el-menu
      :default-active="pageIndex"
      :active-text-color="$store.state.theme"
      text-color="#304156"
      class="el-menu-demo nav-menu"
      style="box-shadow: 0  1px 10px rgba(0, 0, 150, .2);"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">第2页</el-menu-item>
      <el-menu-item index="3">第3页</el-menu-item>
      <el-menu-item index="4">第4页</el-menu-item>

      <div class="el-item-box">
        <lang-picker></lang-picker>
      </div>

      <div class="el-item-box">
        <theme-picker></theme-picker>
      </div>
    </el-menu>
  </div>
</template>

<script>
import LangPicker from "@/components/lang-picker/index.vue"; //语言选择插件
import ThemePicker from "@/components/theme-picker/index.vue"; //主题选择插件

export default {
  components: {
    LangPicker,
    ThemePicker
  },
  props: {
    pageIndex: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {};
  },
  methods: {
    //当前点击的选项
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("selectChange", key); //向外触发选项改变事件, key是选项序号
    }
  }
};
</script>

<style lang='scss' scoped>
.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: rgba($color: #ffffff, $alpha: 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
  .el-item-box {
    margin: 15px;
    color: #304156;
  }
}
 .el-menu--horizontal {
    border-bottom: 0 !important;
  }
</style>