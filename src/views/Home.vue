<!-- 主页 -->
<template>
  <div>
    <nav-menu :pageIndex="pageIndex" @selectChange="handSelectChange"></nav-menu>
    <page-one></page-one>
    <page-two></page-two>
    <page-three></page-three>
    <page-four></page-four>
  </div>
</template>

<script>
import NavMenu from "@/views/nav-menu/NavMenu.vue"; //导航栏组件
import PageOne from "@/views/page-1/PageOne"; //第一页
import PageTwo from "@/views/page-2/PageTwo"; //第二页
import PageThree from "@/views/page-3/PageThree"; //第三页
import PageFour from "@/views/page-4/PageFour"; //第四页

export default {
  components: {
    NavMenu,
    PageOne,
    PageTwo,
    PageThree,
    PageFour
  },
  data() {
    return {
      pageIndex: "1", //当前页的序号
      scrolltop: 0, //滑轮距顶部的距离

      pageOne: 0, //页面距离窗口顶部的距离
      pageTwo: 0,
      pageThree: 0,
      pageFour: 0,
      pageFive: 0
    };
  },
  mounted() {
    console.log(this.$t("lang.hello"));
    this.getPageDistance();
    this.getPulleyTopDistance();
  },
  methods: {
    //拿到每个page页面距窗体顶部的距离
    getPageDistance() {
      this.pageOne = document.getElementById("page-one").offsetTop;
      this.pageTwo = document.getElementById("page-two").offsetTop;
      this.pageThree = document.getElementById("page-three").offsetTop;
      this.pageFour = document.getElementById("page-four").offsetTop;             
    },

    // 返回滑轮距顶部的距离
    getPulleyTopDistance() {
      var that = this;
       //监听滑轮滚动事件
      window.onscroll = function() {
        that.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      };
    },

    //选项改变的回调函数, 设置滚动到对应的page
    handSelectChange(index) {
      switch (index) {
        case "1":
          this.pulleyRoll(this.pageOne, this.scrolltop);
          break;
        case "2":
          this.pulleyRoll(this.pageTwo, this.scrolltop);
          break;
        case "3":
          this.pulleyRoll(this.pageThree, this.scrolltop);
          break;
        case "4":
          this.pulleyRoll(this.pageFour, this.scrolltop);
          break;
      }
    },

     // 页面page向上滚动和向下滚动的函数
     // top是page距窗体顶部的距离, distance当前滚动条与窗体顶部的距离
    pulleyRoll(top, distance){
      /*页面上滚*/
      if(distance < top){
        let small_interval = (top-distance)/50;
        let i = 0;
        let timer = setInterval(()=>{
          i++;
          distance+= small_interval;
          document.documentElement.scrollTop = distance;
          if(i == 50){
            clearInterval(timer);
          }
        },10)
      }
      /*页面下滚*/
      else if(distance > top){
        let small_interval = (distance - top)/50;
        let i = 0;
        let timer = setInterval(()=>{
          i++;
          distance -= small_interval;
          document.documentElement.scrollTop = distance;
          if(i == 50){
            clearInterval(timer);
          }
        },10);
      }
    }
  },
  watch: {
    //监听 滑轮滚动的值的变化 来实现自动锚点, 即改变pageIndex
    scrolltop(val) {
      val += 200;
      if (val > this.pageOne && val <= this.pageTwo) {
        this.pageIndex = "1";
      } else if (val > this.pageTwo && val <= this.pageThree) {
        this.pageIndex = "2";
      } else if (val > this.pageThree && val <= this.pageFour) {
        this.pageIndex = "3";
      } else if (val > this.pageFour) {
        this.pageIndex = "4";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>