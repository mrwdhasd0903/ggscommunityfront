<!--轮播图拓展栏-->
<template>
  <div v-if="carousel.switch" class="block">
    <el-carousel height="200px">
      <el-carousel-item v-for="(item,index) in carousel.items" :key="index">
        <a target="_blank" :href="item.href">
          <img :src="item.src" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ExpandBar",
  components: {},
  data() {
    return {
      carousel: {
        switch: true,
        items: [
          {
            src:
              "https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg",
            href: "https://www.aliyun.com/minisite/goods?userCode=c6po0lwh"
          },
          {
            src:
              "https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg",
            href: "https://www.aliyun.com/minisite/goods?userCode=c6po0lwh"
          },
          {
            src:
              "https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg",
            href: "https://www.aliyun.com/minisite/goods?userCode=c6po0lwh"
          },
          {
            src:
              "https://img.alicdn.com/tfs/TB1Gc3zmAL0gK0jSZFxXXXWHVXa-259-194.jpg",
            href: "https://www.aliyun.com/minisite/goods?userCode=c6po0lwh"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 2px;
}
.block {
  border-radius: 2px;
  overflow: hidden;
  width: 296px;
}
</style>
<style>
.block .el-carousel__button {
  width: 8px;
}
</style>