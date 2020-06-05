<!-- 文章分类选择-->
<template>
  <div class="article-divide">
    <article-list-item v-for="(item,index) in list" :item="item" :key="'ArticleListItem'+index"></article-list-item>
    <div v-loading="loading" ref="loading" class="loading"></div>
  </div>
</template>

<script>
//  getCookie("articledivide")
import { getCookie } from "utlis/cookie";
import ArticleListItem from "components/articleListItem/ArticleListItem";
import { findPage } from "network/article";
export default {
  name: "ArticleDivide",
  components: { ArticleListItem },
  data() {
    return {
      pageData: { page: 1, size: 10 },
      loading: false,
      scrollTop: 0,
      list: []
    };
  },
  computed: {},
  activated() {
    //组件激活时 回滚 开启监听
    this.rootRrouterScrollTo(this.scrollTop);
    this.listenerScroll(this.pushList, true);
  },
  deactivated() {
    //组件停用时 记录滚动高度
    this.scrollTop = this.getScrollTop();
    this.listenerScroll(this.pushList, false);
  },
  methods: {
    getList() {
      findPage(this.pageData).then(res => {
        if (res.code == 0) {
          if (res.data.length == 0) {
            this.$message({
              showClose: true,
              message: "到尽头啦",
              center: true,
              type: "warning",
              offset: 100
            });
          } else {
            this.pageData.page++;
          }
          this.list = this.list.concat(res.data);
        } else {
          console.log(res);
        }
      });
    },
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
            this.getList();
            this.loading = false;
          }, 1000);
        }
      } catch (err) {}
    }
  },
  //获取来自跟路由的滚动高度和滚动监听
  inject: ["getScrollTop", "listenerScroll", "rootRrouterScrollTo"],
  mounted() {
    this.getList();
    this.listenerScroll(this.pushList, true);
  }
};
</script>

<style scoped>
.loading {
  height: 100px;
}
</style>
