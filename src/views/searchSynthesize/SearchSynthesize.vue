<template>
  <div class>
    <div v-for="(item,index) in synthesizeList" :key="'synthesizeList'+index">
      <article-list-item v-if="item.type==2" :item="item"></article-list-item>
      <bbs-list-item v-if="item.type==1" :item="item"></bbs-list-item>
      <user-list-item v-if="item.type==4" :index="index" :focusClick="focusClick" :item="item"></user-list-item>
    </div>
  </div>
</template>

<script>
import ArticleListItem from "components/articleListItem/ArticleListItem";
import UserListItem from "components/userListItem/UserListItem";
import BbsListItem from "components/bbsListItem/BbsListItem";
export default {
  name: "SearchSynthesize",
  components: { BbsListItem, ArticleListItem, UserListItem },
  data() {
    return {
      synthesizeList: [
        {
          type: 4,
          headImg:
            "https://i0.hdslb.com/bfs/face/ce65c4f02427ba1162921f15607892f82eb0c294.jpg@52w_52h.webp",
          name: "老王",
          manuscriptCount: 123,
          fansCount: 234,
          introduce: "计算机系的一位靓仔",
          isFocus: false, //是否关注
          gender: 2
        },
        {
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/11/1586535025470.jpg",
          commentCount: 12,
          cover:
            "https://pic2.zhimg.com/80/v2-62e60c0998558a3d6c106c3925a5453b_400x224.jpg",
          id: "1250891695655096320",
          likeCount: 14,
          nickname: "小王",
          readCount: 25,
          starCount: 12,
          title:
            "3 月 20 日意大利新增新冠肺炎 5986 例，为何意大利封城后增长速度还这么快？",
          type: 2,
          userId: "2"
        },
        {
          type: 1,
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/11/1586535025470.jpg",
          commentCount: 10,
          content:
            "先要对职业读书人的背景有两个认识： 1、职业读书人得益于现代的信息爆炸，更侧重于筛选。所以职业读书人能产生拆选价值。 2、行业还处于野蛮生长期，...",
          floor: null,
          images: [
            "https://upload-images.jianshu.io/upload_images/18529253-1d826a2bca7ac0bd?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            "https://upload-images.jianshu.io/upload_images/15590149-c541bc6f667b8ac4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            "https://upload-images.jianshu.io/upload_images/15491776-f03763d7feb3d381?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
          ],
          likeCount: 12,
          nickname: "小王",
          pid: "4",
          publishTime: "2020-04-12 07:52:37",
          scanCount: 12,
          tid: "1",
          title: "4",
          uid: "3"
        }
      ]
    };
  },
  computed: {},
  methods: {
    focusClick(index) {
      this.synthesizeList[index].isFocus = !this.synthesizeList[index].isFocus;
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>