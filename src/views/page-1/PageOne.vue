<!-- 第一页 -->
<template>
  <div>
    <!-- <div id="page-one" class="page-one" :style=" 'height:'+curHeight+'px' ">1</div> -->
    <div id="page-one" class="page-one">1
       <el-button @click="handRequestTest">测试</el-button>
    </div>
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
  methods: {
    //测试
    async handRequestTest(){
      console.log("test");
      try {
          var result= await this.$globalRequest.test4(1001); //测试请求

          console.log(result);
          this.$message.success('测试成功');

        } catch (err) {
          this.$message.info(err.msg);
        }
    }
  }
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