  <!-- 首页 -->
<template>
  <div class="main-major">
    <div class="major-item main-major-main">
      <!-- 二级路由 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="main-major-right">
      <div class="major-item main-major-banner" :class="{'switch-true':switchVal}">
        <banner></banner>
      </div>
      <div class="major-item main-major-enter" :class="{'switch-true':switchVal}">
        <enter-bar></enter-bar>
      </div>
      <div class="major-item main-major-mydata">
        <mydata-bar></mydata-bar>
      </div>
      <div class="major-item main-major-analysdata">
        <analysdata-bar></analysdata-bar>
      </div>
      <div class="major-item main-major-expand">
        <expand-bar></expand-bar>
      </div>
      <div class="major-item main-major-copyright">
        <copyright></copyright>
      </div>
    </div>
    <switch-tool @switchToolClick="switchToolClick($event)"></switch-tool>
  </div>
</template>

<script>
import EnterBar from "components/enterBar/EnterBar";
import MydataBar from "components/mydataBar/MydataBar";
import AnalysdataBar from "components/analysdataBar/AnalysdataBar";
import Copyright from "components/copyright/Copyright";
import Banner from "components/banner/Banner";
import ExpandBar from "components/expandBar/ExpandBar";
import SwitchTool from "components/switchTool/SwitchTool";

export default {
  name: "MainMajor",
  components: {
    EnterBar,
    MydataBar,
    AnalysdataBar,
    Copyright,
    Banner,
    ExpandBar,
    SwitchTool
  },
  data() {
    return {
      switchVal: false,
      //吸顶参数
      majorRightHeight: 0,
      majorItemLeft: 0,
      majorItemTop: []
    };
  },
  inject: ["getScrollTop", "listenerScroll", "rootRrouterScrollTo"],
  computed: {},
  methods: {
    switchToolClick(switchVal) {
      this.switchVal = switchVal;
    }
  },
  mounted() {
    // 如果屏幕宽度大于997,则实现吸顶效果
    if (document.documentElement.clientWidth > 997) {
      let mainMajorRight = document.getElementsByClassName(
        "main-major-right"
      )[0];
      let itemArr = mainMajorRight.getElementsByClassName("major-item");
      this.majorRightHeight = document.getElementsByClassName(
        "main-major-banner"
      )[0].offsetHeight;
      this.majorItemLeft = mainMajorRight.offsetLeft;
      for (let i of mainMajorRight.getElementsByClassName("major-item")) {
        this.majorItemTop.push(i.offsetTop - this.majorRightHeight - 10);
      }
      this.listenerScroll(() => {
        if (this.getScrollTop() > this.majorRightHeight) {
          for (let i in itemArr) {
            if (i > 0) {
              itemArr[i].style.position = "fixed";
              itemArr[i].style.margin = 0;
              itemArr[i].style.top = this.majorItemTop[i] + "px";
              itemArr[i].style.left = this.majorItemLeft + "px";
            }
          }
        } else {
          for (let i in itemArr) {
            if (i > 0) {
              itemArr[i].style.position = "";
              itemArr[i].style.margin = "";
              itemArr[i].style.top = "";
              itemArr[i].style.left = "";
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.main-major {
  /* height: 3000px; */
  max-width: 1000px;
  margin: 0 auto;
}
.main-major:after {
  content: "";
  display: block;
  clear: both;
}
/* all=>item */
.major-item {
  margin-top: 10px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
/* left */
.main-major-main {
  max-width: 694px;
  width: 694px;
  /* height: 3000px; */
  float: left;
}
/* right */
.main-major-right {
  float: right;
}
/* right=>item */
.main-major-right .major-item {
  max-width: 296px;
  /* height: 200px; */
}
.main-major-copyright {
  background: none;
  box-shadow: none;
}
.main-major-banner {
  line-height: 0;
}
@media screen and (max-width: 997px) {
  .main-major-main {
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .main-major-mydata,
  .main-major-analysdata,
  .main-major-expand,
  .main-major-copyright {
    display: none;
  }
  .main-major-banner {
    position: fixed;
    top: 100px;
    right: -300px;
    transition: all 0.2s ease;
  }
  .main-major-enter {
    position: fixed;
    top: 300px;
    right: -300px;
    transition: all 0.2s ease;
  }
  .switch-true {
    right: 10px;
  }
}
@media screen and (max-width: 702px) {
  .main-major-main {
    width: 100%;
  }
}
</style>