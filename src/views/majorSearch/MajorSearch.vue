<template>
  <div class="MajorSearch">
    <div class="search-header">
      <i @click="routerBack" class="el-icon-d-arrow-left"></i>
      <span>搜索 {{searchKey}} 的结果</span>
    </div>
    <div class="MajorSearch-bar">
      <router-link
        v-for="(item,index) in aimRoute"
        :key="index"
        :to="{path:item.route,query:{key:searchKey}}"
        tag="span"
        active-class="search-active"
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
  name: "MajorSearch",
  components: {},
  data() {
    return {
      searchKey: "",
      aimRoute: [
        { title: "综合", route: "/major/search/synthesize" },
        { title: "文章", route: "/major/search/bbs" },
        { title: "帖子", route: "/major/search/article" },
        { title: "用户", route: "/major/search/user" }
      ]
    };
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      //如果是搜索页面重置搜索值
      if (to.path.indexOf("/major/search") != -1) {
        this.searchKey = this.$route.query.key;
      }
    }
  },
  computed: {},
  methods: {
    routerBack() {
      this.$router.back(-1);
    }
  },
  mounted() {
    this.searchKey = this.$route.query.key;
  }
};
</script>

<style scoped>
.search-header {
  font-weight: 600;
  font-size: 22px;
  word-wrap: break-word;
  margin: 10px;
  cursor: pointer;
}
.search-header span {
  color: rgb(75, 75, 75);
  margin-left: 10px;
}

.MajorSearch-bar {
  height: 59px;
  border-bottom: 1px solid #f0f2f7;
  vertical-align: middle;
}
.MajorSearch-bar > span {
  line-height: 59px;
  padding: 0 22px;
  cursor: pointer;
  font-size: 16px;
}
.MajorSearch-bar > span:hover {
  color: #409eff;
}
.search-active {
  color: #409eff;
}
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
</style>