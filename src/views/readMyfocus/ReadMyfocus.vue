<!--阅读我的关注-->
<template>
  <div class>
    <div v-for="(item,index) in list" :key="'focusitem'+index">
      <div class="user">
        <img :src="item.obj.avatar" alt />
        <span class="name">{{item.obj.nickname}}</span>
        <span class="type">发表了{{type2text(item.type)}}</span>
      </div>
      <article-list-item v-if="item.type==1" :item="item.obj"></article-list-item>
      <bbs-list-item v-if="item.type==2" :item="item.obj"></bbs-list-item>
      <dynamic-item v-if="item.type==3" :item="item.obj"></dynamic-item>
    </div>
    <div v-loading="loading" ref="loading" class="loading"></div>
  </div>
</template>

<script>
import ArticleListItem from "components/articleListItem/ArticleListItem";
import BbsListItem from "components/bbsListItem/BbsListItem";
import DynamicItem from "components/dynamicItem/DynamicItem";
import { findPageFollow } from "network/followMember";
export default {
  name: "ReadMyfocus",
  components: { BbsListItem, ArticleListItem, DynamicItem },
  data() {
    return {
      loading: false,
      pageData: {
        page: 1,
        size: 1,
        memberId: null
      },
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
    type2text(type) {
      if (type == 1) {
        return "文章";
      } else if (type == 2) {
        return "帖子";
      } else if (type == 3) {
        return "动态";
      }
    },
    getList() {
      findPageFollow(this.pageData).then(res => {
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
    this.pageData.memberId = window.localStorage.getItem("memberId");
    this.getList();
  }
};
</script>

<style scoped>
.user img {
  width: 30px;
  border-radius: 50%;
}
.user {
  margin: 10px;
  height: 30px;
  vertical-align: top;
}
.user span {
  vertical-align: top;
  margin-left: 5px;
  line-height: 34px;
}
.user .name {
  color: rgb(58, 58, 58);
  font-size: 16px;
  font-weight: 700;
}
.user .type {
  color: rgb(107, 107, 107);
  font-size: 10px;
  line-height: 39px;
}
.loading {
  height: 100px;
}
</style>