<!--个人主页文章列表-->
<template>
  <div class>
    <article-list-item v-for="(item,index) in list" :item="item" :key="'ArticleListItem'+index"></article-list-item>
    
    <!-- {{this.$route.query.uid?'id='+this.$route.query.uid:'我'}}的文章列表
    <br />
    当前第{{pageMessage.page}}页
    <br />
    每页{{pageMessage.size}}条记录
    <br />
    共{{pageMessage.count}}条记录(该参数由后端提供) -->
    <div class="pageQuery">
      <el-pagination
        background
        :page-size="pageMessage.size"
        :pager-count="5"
        @current-change="handleCurrentChange"
        :current-page="pageMessage.page"
        layout="prev, pager, next"
        :total="pageMessage.count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { findPageByUid } from "network/article";
import ArticleListItem from "components/articleListItem/ArticleListItem";

export default {
  name: "ListArticle",
  components: { ArticleListItem },
  data() {
    return {
      pageMessage: {
        page: 1,
        size: 10,
        count: 1,
        userId: null
      },
      list: []
    };
  },
  created() {
    this.findPageByUid();
  },
  methods: {
    //请求
    findPageByUid() {
      this.pageMessage.userId = this.$route.query.uid
        ? this.$route.query.uid
        : window.localStorage.getItem("memberId");
      findPageByUid(this.pageMessage).then(res => {
        this.pageMessage.count = res.count;
        this.list = res.data;
        console.log(res);
      });
    },
    //跳页
    handleCurrentChange(val) {
      this.pageMessage.page = val;
      this.findPageByUid();
    }
  }
};
</script>
<style scoped>
.pageQuery {
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: #fff; */
  text-align: center;
}
</style>