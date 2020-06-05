<template>
  <div id="app">
    <main-nav-bar></main-nav-bar>
    <div ref="rootRrouter" class="root-router" :style="{height:setInnerHeight+'px'}">
      <keep-alive>
        <router-view v-if="isShow"></router-view>
      </keep-alive>
    </div>
    <backtop v-if="showBacktop" @backtopClick="backtopClick"></backtop>
  </div>
</template>

<script>
import { setCookie, getCookie } from "utlis/cookie";
import MainNavBar from "views/mainNavBar/MainNavBar";
import Backtop from "components/backtop/Backtop";
let _this;
export default {
  name: "App",
  components: { MainNavBar, Backtop },
  data() {
    return {
      // 控制router-view的隐藏与展示
      isShow: true,
      setInnerHeight: "",
      showBacktop: false,
      scrollTop: 0
    };
  },
  //从cookie获取头像
  beforeUpdate() {},
  // 提供可注入子组件属性
  provide() {
    return {
      reload: this.reload,
      getScrollTop: this.getScrollTop,
      listenerScroll: this.listenerScroll,
      rootRrouterScrollTo: this.rootRrouterScrollTo
    };
  },
  //挂在之后
  mounted() {
    _this = this;
    //设置根路由高度
    this.setInnerHeight = innerHeight - 52;
    this.$refs.rootRrouter.addEventListener("scroll", function() {
      _this.scrollTop = this.scrollTop;
      if (this.scrollTop > 400) {
        _this.showBacktop = true;
      } else {
        _this.showBacktop = false;
      }
    });
  },

  methods: {
    // 定义reload方法
    reload() {
      // 先隐藏
      this.isShow = false;
      // $nextTick() 将回调延迟到下次 DOM 更新循环之后执行
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    //回到顶部
    backtopClick() {
      // 清空上一次的定时器
      let timer = null;
      clearInterval(timer);
      // 创建定时器，每 15ms 执行一次箭头函数
      timer = setInterval(() => {
        // 每次执行函数，scrollTop 减少十分之一
        this.scrollTop -= this.scrollTop / 10;
        this.$refs.rootRrouter.scrollTo(0, this.scrollTop);
        // 当 scrollTop 小于 2 时，直接使 scrollTop 为 0，并且清空定时器。
        if (this.scrollTop < 2) {
          this.$refs.rootRrouter.scrollTo(0, 0);
          clearInterval(timer);
        }
      }, 15);
    },
    //滚动的指定位置
    rootRrouterScrollTo(top) {
      this.$refs.rootRrouter.scrollTo(0, top);
    },
    //获取scrollTop
    getScrollTop() {
      return this.scrollTop;
    },
    //滚动事件监听
    listenerScroll(callback, flag) {
      if (flag) {
        this.$refs.rootRrouter.addEventListener("scroll", callback);
      } else {
        this.$refs.rootRrouter.removeEventListener("scroll", callback);
      }
    }
  }
};
</script>

<style>
.root-router {
  overflow: auto;
  margin-top: 52px;
  transition: all 0.2s ease;
}
</style>
