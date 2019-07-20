<!-- 第4页 -->
<template>
  <div>
    <div id="page-four" class="page-four" :style=" 'height:'+curHeight+'px' ">4</div>
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
.page-four {
  width: 100%;
  font-size: 50px;
  color: #fff;
  background-color: #C32BAC;
  padding: 25%;
  box-sizing: border-box;
}
</style>