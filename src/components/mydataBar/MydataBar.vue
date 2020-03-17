<!--个人数据统计-->
<template>
  <div class="mydata-bar">
    <router-link
      tag="p"
      v-for="(item,index) in mydataBarData"
      :to="item.link"
      @mouseover="mydataBarItemMouseover(index)"
      @mouseout="mydataBarItemMouseout()"
      @click="mydataBarItemClick(item)"
      :key="index"
    >
      <i :class="item.icon"></i>
      {{item.text}}
      <el-tag :type="setItemCurrentMouseover(index)" size="mini">{{item.msgNum}}</el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MydataBar",
  components: {},
  data() {
    return {
      mydataBarData: [
        {
          text: "我的收藏",
          icon: "el-icon-star-on",
          msgNum: "12",
          link: "/profile/list/star"
        },
        {
          text: "我的创作",
          icon: "el-icon-s-management",
          msgNum: "42",
          link: "/profile/list/article"
        },
        {
          text: "我的关注",
          icon: "el-icon-s-flag",
          msgNum: "102",
          link: "/profile/list/myfocus"
        }
      ],
      itemCurrentMouseover: ""
    };
  },
  computed: {},
  methods: {
    setItemCurrentMouseover(index) {
      if (index === this.itemCurrentMouseover) {
        return null;
      } else {
        return "info";
      }
    },
    mydataBarItemMouseover(index) {
      this.itemCurrentMouseover = index;
    },
    mydataBarItemMouseout() {
      this.itemCurrentMouseover = null;
    },
    mydataBarItemClick(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped>
.mydata-bar {
  width: 296px;
}
p {
  cursor: pointer;
  line-height: 37px;
  font-size: 14px;
  text-align: left;
  color: #8590a6;
  transition: all 0.2s ease;
}
p:hover {
  background: #8590a620;
  color: #409eff;
}
i {
  margin-left: 20px;
  margin-right: 25px;
}
.el-tag {
  margin-left: 110px;
}
</style>