 <!-- 个人主页我的收藏列表 -->
<template>
  <div class>
    {{this.$route.query.uid?'id='+this.$route.query.uid:'我'}}的收藏列表
    <br />
    当前第{{pageMessage.currentPage}}页
    <br />
    每页{{pageMessage.pageSize}}条记录
    <br />
    共{{pageMessage.totalCount}}条记录(该参数由后端提供)
    <div class="pageQuery">
      <el-pagination
        background
        :page-size="pageMessage.pageSize"
        :pager-count="5"
        @current-change="handleCurrentChange"
        :current-page="pageMessage.currentPage"
        layout="prev, pager, next"
        :total="pageMessage.totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListStar",
  components: {},
  data() {
    return {
      pageMessage: {
        currentPage: 1,
        pageSize: 10,
        totalCount: 500
      }
    };
  },
  computed: {},
  methods: {
    handleCurrentChange(val) {
      this.pageMessage.currentPage = val;
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