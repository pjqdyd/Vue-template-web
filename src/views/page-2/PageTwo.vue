<!-- 第2页 -->
<template>
  <div>
    <div class="page-two" :style=" 'height:'+curHeight+'px' ">2</div>
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
  background-color: #eaeaea;
  margin-bottom: 10px;
}
</style>