<!--创作者数据-->
<template>
  <div class="analysdata-bar">
    <el-card shadow="never" class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-s-custom"></i>
        <span>创作者数据</span>
      </div>
      <div class="analysdata-content">
        <div v-for="(item,index) in analysdata" :key="index">
          <p class="content-title">{{item.title}}</p>
          <p class="content-val">{{item.val}}</p>
          <p class="content-than">
            <span>较前日</span>
            <i :class="computedSymbol(item.thanSymbol)"></i>
            {{item.than}}
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AnalysdataBar",
  components: {},
  data() {
    return {
      analysdata: [
        {
          title: "昨日被阅读数",
          val: "28",
          thanSymbol: true,
          than: "16%"
        },
        {
          title: "昨日获赞同数",
          val: "12",
          thanSymbol: false,
          than: "9%"
        }
      ]
    };
  },
  computed: {},
  methods: {
    computedSymbol(thanSymbol) {
      if (thanSymbol) {
        return "el-icon-caret-top";
      } else {
        return "el-icon-caret-bottom";
      }
    }
  }
};
</script>

<style scoped>
.analysdata-bar {
  width: 296px;
}
.clearfix {
  color: #8590a6;
}
.clearfix i {
  margin-left: 20px;
  margin-right: 25px;
}
.analysdata-content {
  color: #8590a6;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.analysdata-content > div {
  flex-grow: 1;
}
.analysdata-content > div:nth-child(1) {
  border-right: 1px solid #8590a640;
}
.content-title {
  font-size: 12px;
}
.content-than span {
  color: #8590a6;

  font-size: 12px;
  font-weight: 500;
}
.content-val {
  color: #000;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
}
.content-than i {
  font-size: 18px;
  color: red;
}
.content-than {
  color: #000;
  font-size: 14px;
  font-weight: 700;
}
</style>
<style>
.analysdata-bar .el-card .el-card__header {
  padding: 10px 0;
  font-size: 14px;
}
</style>