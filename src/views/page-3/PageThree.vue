<!-- 第3页 -->
<template>
  <div>
    <div id="page-three" class="page-three" :style=" 'height:'+curHeight+'px' ">3</div>
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
.page-three {
  width: 100%;
  font-size: 50px;
  color: #fff;
  background-color: #9708CC;
  margin-top: 10px;
  padding: 25%;
  box-sizing: border-box;
}
</style>