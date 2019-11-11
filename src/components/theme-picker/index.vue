<template>
  <!-- 颜色下拉选框 -->
  <el-dropdown @command="handThemeCommand" @visible-change="handOpenOrClose">
    <span class="el-dropdown-link default-text-color">
      {{$t('lang.theme')}}
      <!-- 来自对应语言的'主题/theme'-->
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>

    <!-- 主题颜色列表 -->
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in themeList"
        :key="index"
        :command="item"
        :style="'color:'+item.val"
        icon="iconfont icon-fangkuai"
      >{{item.name}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
const ORIGINAL_THEME = "#3c70ea"; // default color

export default {
  data() {
    return {
      theme: "", //当前主题的颜色值
      storageTheme: this.$store.state.theme, //从vuex的store读取缓存的主题色
      themeList: this.$t("themeList.list")    //来自对应语言的主题列表
    };
  },
  computed: {
    defaultTheme() {
      //计算默认的主题色
      return typeof this.storageTheme == "string" ? this.storageTheme : ORIGINAL_THEME;
    }
  },
  watch: {
    defaultTheme: {
      //监听默认的主题色
      handler: function(val) {
        this.theme = val; //更改当前主题色
      },
      immediate: true
    },
    async theme(val) {
      this.changeTheme(val);
    }
  },
  created() {
    //在页面刷新或初次加载后,设置当前的主题色(来源于缓存或者默认)
    this.theme == this.storageTheme
      ? console.log("默认主题")
      : this.changeTheme( this.theme);
  },
  methods: {
    handThemeCommand(item) { //主题点击事件
      this.theme = item.val; //修改主题
    },
    handOpenOrClose() {  //展开关闭事件
      this.themeList = this.$t("themeList.list");
    },
    //改变主题
    changeTheme(val) {
      if(this.localTheme == val){ //如果修改的主题和当前的主题相同
        return;
      }
      this.$store.commit("setTheme", val); //保存主题颜色进入本地
      this.$message({ //显示通知
        dangerouslyUseHTMLString: true,
        iconClass: "iconfont",
        center: true,
        duration: 1000,
        message:'<p class="iconfont icon-fangkuai" style="color:' + val +'"> 初始主题色成功!</p>'
      });
      this.$emit("change", val); //向外触发主题颜色改变事件
    }

  }
};
</script>

<style>
.theme-message .theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
