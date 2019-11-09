<!-- 主页 -->
<template>
  <div>
    <!-- 折叠面板 (height:0消除默认样式)-->
    <el-collapse v-model="activeNames" style="border: 0;">
      <el-collapse-item style="height: 0; margin-botttom:0;" name="nav">
        <!-- 导航栏 -->
        <nav-menu :pageIndex="pageIndex" @selectChange="handSelectChange"></nav-menu>
      </el-collapse-item>
    </el-collapse>
    
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

      activeNames: ['nav'], //折叠面板显示导航栏nav

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
      var waiting = false; //用于优化监听scroll, 300ms执行一次
       
      window.onscroll = function() { //监听页面滚动事件
          if (waiting) {return;}
          waiting = true;
          let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取页面元素距离顶部的距离
          //大于0表示上滚, 隐藏导航栏, 反之显示导航栏
          distance - that.scrolltop > 0 ? that.activeNames = [''] : that.activeNames = ['nav'];
          //赋值修改页面距顶部的距离
          that.scrolltop = distance; 
          setTimeout(function () { //优化监听scroll, 300ms执行一次
            waiting = false;
          }, 300);
      };

    },

    //选项改变的回调函数, 设置滚动到对应的page
    handSelectChange(index) {
      switch (index) {
        case "1":
          this.pulleyRoll(this.pageOne);
          break;
        case "2":
          this.pulleyRoll(this.pageTwo);
          break;
        case "3":
          this.pulleyRoll(this.pageThree);
          break;
        case "4":
          this.pulleyRoll(this.pageFour);
          break;
      }
    },

    // top是page距窗体顶部的距离
    pulleyRoll(top){
      //设置页面滚动到的的位置
      window.scrollTo({ 
        top: top, 
        behavior: "smooth" 
      });
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