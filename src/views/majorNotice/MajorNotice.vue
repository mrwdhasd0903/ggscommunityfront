<!-- 公告 -->
<template>
  <div class>
    <ul>
      <router-link
        tag="li"
        v-for="(item,index) in noticeList"
        :to="'/major/noticedetails/'+index"
        :key="index"
      >{{item.title}}{{index}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MajorNotice",
  components: {},
  data() {
    return {
      scrollTop: 0,
      noticeList: [
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" },
        { title: "公告公告公告公告公告公告公告" }
      ]
    };
  },
  computed: {},
  methods: {},
  inject: ["getScrollTop", "listenerScroll", "rootRrouterScrollTo"],
  activated() {
    //组件激活时 回滚
    this.rootRrouterScrollTo(this.scrollTop);
  },
  deactivated() {
    //组件停用时 记录滚动高度
    this.scrollTop = this.getScrollTop();
  }
};
</script>

<style scoped>
li {
  line-height: 50px;
}
</style>