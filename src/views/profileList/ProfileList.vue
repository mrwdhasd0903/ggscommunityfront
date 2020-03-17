<!-- 个人主页 -->
<template>
  <div class="profile-list">
    <div class="list-bar">
      <router-link
        v-for="(item,index) in menuList"
        :key="index"
        :to="item.route"
        tag="span"
        active-class="list-active"
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
  name: "ProfileList",
  components: {},
  data() {
    return {
      menuList: [
        { title: "消息", route: "/profile/list/message" },
        { title: "收藏", route: "/profile/list/star" },
        { title: "文章", route: "/profile/list/article" },
        { title: "帖子", route: "/profile/list/bbs" },
        { title: "动态", route: "/profile/list/dynamic" },
        { title: "粉丝", route: "/profile/list/myfan" },
        { title: "关注", route: "/profile/list/myfocus" },

      ]
    };
  },
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
.list-active {
  color: #409eff;
}
.profile-list {
  width: 100%;
}
.list-bar {
  height: 59px;
  border-bottom: 1px solid #f0f2f7;
  vertical-align: middle;
}
.list-bar > span {
  line-height: 59px;
  padding: 0 22px;
  cursor: pointer;
  font-size: 16px;
}
.list-bar > span:hover {
  color: #409eff;
}
@media screen and (max-width: 425px) {
  .list-bar > span {
    padding: 0 12px;
  }
}
@media screen and (max-width: 375px) {
  .list-bar > span {
    padding: 0 8px;
  }
}
</style>