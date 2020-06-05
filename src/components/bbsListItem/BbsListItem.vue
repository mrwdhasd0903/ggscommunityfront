<!-- 帖子列表单个组件-->
<template>
  <div class="list-item">
    <router-link tag="div" :to="'/major/bbsdetails/'+item.pid">
      <p class="item-title">{{item.title}}</p>
      <p class="first-floor">{{item.content}}</p>
    </router-link>
    <el-image
      class="item-img"
      fit="cover"
      v-for="(imgItem,index) in item.images"
      :key="'imgItem'+index"
      :src="imgItem"
      :preview-src-list="item.images"
    ></el-image>
    <p class="item-msg">
      <span class="el-icon-user">{{item.nickname}}</span>
      <span class="el-icon-star-off">{{item.likeCount}}</span>
      <span class="el-icon-chat-line-square">{{item.commentCount}}</span>
      <span>{{item.publishTime}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "BbsListItem",
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
.item-img {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}
.list-item {
  cursor: pointer;
  margin: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f2f7;
}
.item-title {
  color: #2f2f2f;
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.first-floor {
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 24px;
  color: #818181;
  max-height: 187px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
.item-msg span {
  margin-right: 10px;
  font-size: 12px;
  color: #b4b4b4;
}
.el-icon-user:hover {
  color: #8b8b8b;
}
</style>
<style>
@media screen and (max-width: 997px) {
  .el-image-viewer__wrapper {
    display: none;
  }
}
</style>