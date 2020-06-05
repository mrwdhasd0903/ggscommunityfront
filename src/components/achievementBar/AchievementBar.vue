<!--个人成就-->
<template>
  <div class="achievement-bar">
    <el-card shadow="never" class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-s-custom"></i>
        <span>个人成就</span>
      </div>
      <div class="achievement-content">
        <p v-for="(item,index) in achievementData" :key="index">
          <i :class="item.ico"></i>获得
          <span>{{item.val}}</span>
          {{item.text}}
        </p>
        <div class="fan">
          <div>
            <p>
              <span>{{fanData[0].count}}</span>
            </p>
            <p>粉丝</p>
          </div>
          <div>
            <p>
              <span>{{fanData[1].count}}</span>
            </p>
            <p>关注</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AchievementBar",
  components: {},
  data() {
    return {
      achievementData: [
        { val: 250, text: "次赞同", ico: "el-icon-caret-top" },
        { val: 135, text: "次收藏", ico: "el-icon-star-on" },
        { val: 608, text: "阅读量", ico: "el-icon-s-help" }
      ],
      fanData: [
        { name: "粉丝", count: "64" },
        { name: "关注", count: "5" }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.fan {
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.fan p {
  line-height: 20px;
}
.fan > div {
  flex-grow: 1;
}
.fan > div:nth-child(1) {
  border-right: 1px solid #8590a640;
}
.clearfix {
  color: #8590a6;
}
.clearfix i {
  margin-left: 20px;
  margin-right: 25px;
}
p {
  font-size: 16px;
  line-height: 30px;
  color: #8590a6;
}
p i {
  padding-right: 15px;
}
p span {
  color: #393939;
  font-weight: 700;
}
</style>
<style>
.achievement-bar .el-card .el-card__header {
  padding: 10px 0;
  font-size: 14px;
}
</style>