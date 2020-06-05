<!--阅读热门-->
<template>
  <div class>
    <div v-for="(item,index) in list" :key="'hostListItem'+index">
      <article-list-item v-if="item.type==1" :item="item.object"></article-list-item>
      <bbs-list-item v-if="item.type==2" :item="item.object"></bbs-list-item>
    </div>
    <div v-loading="loading" ref="loading" class="loading"></div>
  </div>
</template>

<script>
import ArticleListItem from "components/articleListItem/ArticleListItem";
import BbsListItem from "components/bbsListItem/BbsListItem";
import { hotFindPage } from "network/hot";
export default {
  name: "ReadHot",
  components: { BbsListItem, ArticleListItem },
  data() {
    return {
      loading: false,
      pageData: { page: 1, size: 10 },
      list: []
    };
  },
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
      hotFindPage(this.pageData).then(res => {
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
    this.getList();
    this.listenerScroll(this.pushList, true);
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