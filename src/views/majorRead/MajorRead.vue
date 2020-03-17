<!-- 首页阅读板块 -->
<template>
  <div class="major-read">
    <div class="major-read-bar">
      <router-link
        v-for="(item,index) in readList"
        :key="index"
        :to="item.route"
        tag="span"
        active-class="read-active"
      >{{item.title}}</router-link>
    </div>
    <!-- 三级路由 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MajorRead",
  components: {},
  data() {
    return {
      readList: [
        { title: "热榜", route: "/major/read/hot" },
        { title: "关注", route: "/major/read/myfocus" },
        { title: "社区", route: "/major/read/bbs" },
        { title: "文章", route: "/major/read/article" },
        { title: "推荐", route: "/major/read/recommend" }
      ],
      readShow: true
    };
  },
  watch: {},
  computed: {},
  methods: {}
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
.read-active {
  color: #409eff;
}
.major-read {
  width: 100%;
  position: relative;
}
.major-read-bar {
  height: 59px;
  border-bottom: 1px solid #f0f2f7;
  vertical-align: middle;
}
.major-read-bar > span {
  line-height: 59px;
  padding: 0 22px;
  cursor: pointer;
  font-size: 16px;
}
.major-read-bar > span:hover {
  color: #409eff;
}
.read-show {
  background: #eee;
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 375px) {
  .major-read-bar > span {
    padding: 0 12px;
  }
}
</style>