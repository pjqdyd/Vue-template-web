<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    //如果加载完成, 移除index.html的加载动画
    created(){
      let loading = document.getElementById("init-loading-div");
      if(loading != null){
        document.body.removeChild(loading);
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
/* 默认文字颜色 */
.default-text-color{
  color: #304156;
}

/* 覆盖折叠面板的'>'图标默认样式, 隐藏 */ 
.el-collapse-item__arrow{
  width: 0;
  height: 0;
  visibility: hidden;
  /* opacity: 0; */
}
</style>
