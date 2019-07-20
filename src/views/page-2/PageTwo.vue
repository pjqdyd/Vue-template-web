<!-- 第2页 -->
<template>
  <div>
    <div id="page-two" class="page-two" :style=" 'height:'+curHeight+'px' ">2</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      curHeight: "" //窗口高度
    };
  },
  mounted() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    this.curHeight = h; //获取窗口height
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.page-two {
  width: 100%;
  font-size: 50px;
  color: #fff;
  background-color: #7367F0;
  padding: 25%;
  box-sizing: border-box;
}
</style>