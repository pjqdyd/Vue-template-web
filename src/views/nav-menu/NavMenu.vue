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
      <!-- 页面(中/英文显示) -->
      <el-menu-item index="1">{{$t('pages.page1')}}</el-menu-item>
      <el-menu-item index="2">{{$t('pages.page2')}}</el-menu-item>
      <el-menu-item index="3">{{$t('pages.page3')}}</el-menu-item>
      <el-menu-item index="4">{{$t('pages.page4')}}</el-menu-item>

      <!-- 语言选框 -->
      <div class="el-item-box">
        <lang-picker></lang-picker>
      </div>

      <!-- 主题颜色选框 -->
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
$nav-height: 50px;
$nav-bgColor:  rgba($color: #ffffff, $alpha: 0.2);

.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: $nav-height;
  background: $nav-bgColor;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-menu-item {
    padding: 0 3%;
    height: $nav-height;
    line-height: $nav-height;
  }
  .el-item-box {
    margin: 1%; 
    color: #304156;
  }
}
.el-menu--horizontal {
  border-bottom: 0 !important;
}

.el-menu-item:not(.is-disabled):focus, .el-menu-item:not(.is-disabled):hover, .el-submenu__title:hover {
    background-color: $nav-bgColor;
}
</style>
