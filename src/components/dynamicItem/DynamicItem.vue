<template>
  <div class="list-item">
    <p class="first-floor">{{item.content}}</p>
    <div class="img-bar">
      <el-image
        class="item-img"
        fit="cover"
        v-for="(imgItem,index) in item.imgList"
        :key="'imgItem'+index"
        :src="imgItem"
        :preview-src-list="item.imgList"
      ></el-image>
    </div>
    <p class="item-msg">
      <span>{{item.finallyTime}}</span>
      <span @click="setDown">查看评论(123)</span>
    </p>
    <div class="comment-Bar" v-if="isDown"></div>
  </div>
</template>

<script>
export default {
  name: "DynamicItem",
  components: {},
  data() {
    return {
      isDown: false
    };
  },
  props: {
    item: null
  },
  computed: {},
  methods: {
    setDown() {
      this.isDown = !this.isDown;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.comment-Bar {
  height: 300px;
}
.img-bar {
  max-width: 312px;
}
.item-img {
  margin: 0px 2px;
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
.first-floor {
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
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