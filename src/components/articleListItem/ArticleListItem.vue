<template>
  <div class="article-item">
    <router-link tag="div" class="list-item" :to="'/major/articledetails/'+item.articleId">
      <div class="item-cover">
        <img :src="item.cover" alt />
      </div>
      <div class="item-title">{{item.title}}</div>
      <div class="item-msg">
        <span>点赞 {{item.praiseCount}}</span>
        <span>阅读 {{item.readCount}}</span>
        <span>评论 {{item.commentCount}}</span>
        <span>收藏 {{item.starCount}}</span>
        <span>{{item.nickname}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",
  components: {},
  data() {
    return {};
  },
  props: {
    item: null
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.list-item {
  position: relative;
  height: 105px;
  margin: 16px 20px;
  padding-bottom: 18px;
  cursor: pointer;
  border-bottom: 1px solid #f0f2f7;
}
.item-cover {
  position: absolute;
  right: 0;
  width: 225px;
  height: 105px;
}
.item-cover img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.item-title {
  width: calc(100% - 240px);
  color: #1a1a1a;
  font-size: 18px;
  line-height: 28px;
  height: 84px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
}
.item-msg {
  color: #8590a6;
  font-size: 16px;
  height: 21px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 225px);
}
.item-msg span {
  margin-right: 10px;
}
.loading {
  height: 100px;
}
@media screen and (max-width: 693px) {
  .item-msg {
    font-size: 12px;
    height: 19px;
    width: calc(100% - 0px);
  }
  .item-msg span {
    margin-right: 5px;
  }
}
@media screen and (max-width: 425px) {
  .item-cover {
    right: 8px;
    width: 112px;
    height: 52px;
  }
  .item-title {
    width: calc(100% - 120px);
    font-size: 17px;
    max-height: 56px;
  }
  .item-msg {
    width: calc(100% - 120px);
  }
  .list-item {
    height: 70px;
  }
}
</style>