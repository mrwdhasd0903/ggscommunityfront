<!-- 个人主页动态列表 -->
<template>
  <div class>
    {{this.$route.query.uid?'id='+this.$route.query.uid:'我'}}的动态列表
    <br />
    当前第{{pageMessage.page}}页
    <br />
    每页{{pageMessage.size}}条记录
    <br />
    共{{pageMessage.count}}条记录(该参数由后端提供)
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
import { findPageByUid } from "network/dynamic";
export default {
  name: "ListDynamic",
  components: {},
  data() {
    return {
      pageMessage: {
        page: 1,
        size: 10,
        count: 1,
        uid: null
      }
    };
  },
  created() {
    this.findPageByUid();
  },
  methods: {
    //请求
    findPageByUid() {
      //获取userId-------------
      this.pageMessage.uid = this.$route.query.uid
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