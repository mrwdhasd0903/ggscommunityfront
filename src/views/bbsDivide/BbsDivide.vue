<!-- 帖子分类选择-->
<template>
  <div class>
    <ul>
      <router-link
        tag="li"
        v-for="(item,index) in list"
        :to="'/major/bbsdetails/'+index"
        :key="index"
      >{{item.title}}{{index}}</router-link>
    </ul>
    <div v-loading="loading" ref="loading" class="loading"></div>
  </div>
</template>

<script>
import { getCookie } from "utlis/cookie";

export default {
  name: "BbsDivide",
  components: {},
  data() {
    return {
      loading: false,
      scrollTop: 0,
      push: [
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") }
      ],
      list: [
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") },
        { title: getCookie("bbsdivide") }
      ]
    };
  },
  computed: {},
  activated() {
    //组件激活时 回滚
    this.rootRrouterScrollTo(this.scrollTop);
  },
  deactivated() {
    //组件停用时 记录滚动高度
    this.scrollTop = this.getScrollTop();
  },
  methods: {
    pushList() {
      try {
        //因为在路由销毁后还是会监听事件并执行下面代码,但是获取不到loading导致报错
        if (
          !this.loading &&
          this.getScrollTop() + window.innerHeight - 62 >=
            this.$refs.loading.offsetTop
        ) {
          this.loading = true;
          setTimeout(() => {
            this.list = this.list.concat(this.push);
            this.loading = false;
          }, 2000);
        }
      } catch (err) {
        console.log();
      }
    }
  },
  //获取来自跟路由的滚动高度和滚动监听
  inject: ["getScrollTop", "listenerScroll", "rootRrouterScrollTo"],
  mounted() {
    this.listenerScroll(this.pushList);
  }
};
</script>

<style scoped>
li {
  line-height: 150px;
}
.loading {
  height: 100px;
}
</style>