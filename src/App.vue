<template>
  <div id="app" v-if="isShow">
    <router-view/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        "isShow": false //是否显示内容
      }
    },
    //如果加载完成, 移除index.html的加载动画, 显示vue挂载的内容
    beforeCreate(){
      setTimeout(() =>{
        let loadingBox = document.getElementById("init-loading-div");
        if(loadingBox != null){
          document.body.removeChild(loadingBox);
        }
        this.isShow = true; //显示vue挂载的内容
      },1500);
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
