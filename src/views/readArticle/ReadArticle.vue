<!--阅读文章分类-->
<template>
  <div class>
    <div id="articleBar" class="article-bar">
      <el-checkbox-group
        size="mini"
        @change="passDivide"
        text-color="#409EFF"
        fill="#edf6ff"
        :min="1"
        v-model="checkboxGroup"
      >
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
      <span @click="articleSwitchClick" id="articleSwitch" class="el-icon-arrow-down"></span>
    </div>
    <!-- 四级路由 -->
    <transition name="fade" mode="out-in">
      <router-view :key="activeDate"></router-view>
    </transition>
  </div>
</template>

<script>
import { setCookie, getCookie } from "utlis/cookie";
export default {
  name: "ReadArticle",
  components: {},
  data() {
    return {
      checkboxGroup: [
        "生活记录类",
        "学术分享类",
        "党文团文类",
        "新闻资讯类",
        "想不出来类",
        "绞尽脑汁类",
        "随便写写类",
        "不造什么类",
        "用来凑数类"
      ],
      cities: [
        "生活记录类",
        "学术分享类",
        "党文团文类",
        "新闻资讯类",
        "想不出来类",
        "绞尽脑汁类",
        "随便写写类",
        "不造什么类",
        "用来凑数类"
      ],
      articleBarHeight: "auto",
      articleSwitchVal: false,
      activeDate: 1
    };
  },
  computed: {},
  methods: {
    //伸缩开关点击
    articleSwitchClick() {
      this.articleSwitchVal = !this.articleSwitchVal;
      if (this.articleSwitchVal) {
        document.getElementById("articleSwitch").style.transform =
          "rotate(180deg)";
        document.getElementById(
          "articleBar"
        ).style.height = this.articleBarHeight;
      } else {
        document.getElementById("articleSwitch").style.transform =
          "rotate(0deg)";
        document.getElementById("articleBar").style.height = "44px";
      }
    },
    //路由传参
    passDivide() {
      setCookie("articledivide", this.checkboxGroup);
      this.activeDate++;
    },
    //设置CheckboxGroup
    setCheckboxGroup() {
      if (getCookie("articledivide")) {
        this.checkboxGroup = getCookie("articledivide").split(",");
      } else {
        this.passDivide();
      }
    }
  },
  mounted() {
    //伸缩高度调整
    let articleBar = document.getElementById("articleBar");
    // this.articleBarHeight = articleBar.offsetHeight;
    if (articleBar.offsetHeight >= 50) {
      articleBar.style.height = "44px";
    } else {
      document.getElementById("articleSwitch").style.display = "none";
    }
    //根据cookie设置CheckboxGroup的值
    this.setCheckboxGroup();
  }
};
</script>

<style scoped>
/* 路由动画开始 */
.fade-enter {
  margin-left: 100%;
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave {
  margin-left: 0;
  opacity: 1;
}
.fade-leave {
  transition: all 0.3s ease;
}
/* 路由动画结束 */
.article-bar {
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
#articleSwitch {
  position: absolute;
  top: 14px;
  right: 4px;
  transition: all 0.3s ease;
}
label {
  margin: 8px;
}
</style>
<style>
#articleBar .el-checkbox-button__inner {
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
}
#articleBar .el-checkbox-button.is-focus .el-checkbox-button__inner {
  border-color: #dcdfe6;
}
</style>