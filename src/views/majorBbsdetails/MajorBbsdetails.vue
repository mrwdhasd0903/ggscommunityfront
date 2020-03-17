<!--帖子详情-->
<template>
  <div class>
    <i @click="routerBack" class="el-icon-d-arrow-left"></i>
    标题标题:id为{{ $route.params.id }}的帖子标题
    <br />内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </div>
</template>

<script>
export default {
  name: "MajorBbsdetails",
  components: {},
  data() {
    return {};
  },
  activated() {
    this.rootRrouterScrollTo(0);
  },
  computed: {},
  inject: ["rootRrouterScrollTo"],

  methods: {
    routerBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
i {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}
i:hover {
  color: #409eff;
}
</style>