<!-- 个人主页信息列表 -->
<template>
  <div class>
    {{this.$route.query.uid?'id='+this.$route.query.uid:'我'}}的粉丝列表
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
import { findPageByMemberId } from "network/followMember";
export default {
  name: "ListMyfan",
  components: {},
  data() {
    return {
      pageMessage: {
        page: 1,
        size: 10,
        count: 1,
        flag: 1,
        memberId: null
      },
      list: []
    };
  },
  created() {
    this.findPageByMemberId();
  },
  methods: {
    //请求
    findPageByMemberId() {
      //获取userId-------------
      this.pageMessage.memberId = this.$route.query.uid
        ? this.$route.query.uid
        : window.localStorage.getItem("memberId");
      findPageByMemberId(this.pageMessage).then(res => {
        this.pageMessage.count = res.count;
        this.list = res.data;
        console.log(res);
      });
    },
    //跳页
    handleCurrentChange(val) {
      this.pageMessage.page = val;
      this.findPageByMemberId();
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