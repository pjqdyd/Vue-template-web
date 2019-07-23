<!-- 第一页 -->
<template>
  <div>
    <!-- <div id="page-one" class="page-one" :style=" 'height:'+curHeight+'px' ">1</div> -->
    <div id="page-one" class="page-one">1</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //curHeight: "" //窗口高度
    };
  },
  mounted() {
    //var h = document.documentElement.clientHeight || document.body.clientHeight;
    //this.curHeight = h; //获取窗口height
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.page-one {
  width: 100%;
  height: 1000px;
  font-size: 50px;
  color: #fff;
  background-color: #6db9ff;
  padding: 25%;
  box-sizing: border-box;
}
</style>