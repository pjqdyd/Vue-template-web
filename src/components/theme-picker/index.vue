<template>
  <!-- <el-color-picker
    v-model="theme"
    :predefine="['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />-->

  <!-- 颜色下拉选框 -->
  <el-dropdown @command="handThemeCommand" @visible-change="handOpenOrClose">
    <span class="el-dropdown-link default-text-color">
      {{$t('lang.theme')}}<!-- 来自对应语言的主题-->
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>

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
const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color

export default {
  data() {
    return {
      chalk: "", // content of theme-chalk css
      theme: "", //当前主题的颜色值
      isSuccess: true, //是否加载主题成功
      themeList: this.$t("themeList.list") //来自对应语言的主题列表
    };
  },
  computed: {
    defaultTheme() {
      //计算默认的主题色
      let storageTheme = this.$store.state.theme; //从vuex的store读取缓存的主题色
      return typeof storageTheme == "string" ? storageTheme : ORIGINAL_THEME;
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
    this.theme == ORIGINAL_THEME
      ? console.log("默认主题")
      : this.changeTheme(this.theme);
  },
  methods: {
    handThemeCommand(item) {
      //主题点击事件
      this.theme = item.val; //修改主题
    },
    handOpenOrClose(){//展开关闭事件
      this.themeList = this.$t("themeList.list");
    },
    changeTheme(val) {
      const oldVal = this.chalk ? this.theme : ORIGINAL_THEME;
      if (typeof val !== "string") return;
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      //console.log(themeCluster, originalCluster)
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );

          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };

      if (!this.chalk) { //获取element的theme-chalk
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
        this.getCSSString(url, "chalk");
      }

      const chalkHandler = getHandler("chalk", "chalk-style");

      chalkHandler();

      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter(style => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== "string") return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });

      if (this.isSuccess == true) {//判断是否加载主题成功
        this.$store.commit("setTheme", val); //保存主题颜色进入本地
        this.$message({
          dangerouslyUseHTMLString: true,
          iconClass: "iconfont",
          center: true,
          duration: 1000,
          message: '<p class="iconfont icon-fangkuai" style="color:' +val+ '"> 修改主题色成功 Success</p>'
        });
      }
       this.$emit("change", val); //向外触发主题颜色改变事件
    },

    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },

    getCSSString(url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
            this.isSuccess = true;
            resolve();
          } else {
            this.isSuccess = false;
          }
        };
        xhr.open("GET", url);
        xhr.send();
      });
    },

    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
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
