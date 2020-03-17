<!--入口板块-->
<template>
  <div class="enter-bar">
    <router-link
      tag="div"
      v-for="(item,index) in enterBarData"
      :key="index"
      :to="item.link"
      active-class="enter-active"
      class="enter-bar-item"
    >
      <span :class="item.icon"></span>
      <p>{{item.title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EnterBar",
  components: {},
  data() {
    return {
      enterBarData: [
        { title: "阅读", icon: "el-icon-reading", link: "/major/read" },
        { title: "公告", icon: "el-icon-data-board", link: "/major/notice" },
        { title: "说明", icon: "el-icon-guide", link: "/major/guide" },
        { title: "发帖子", icon: "el-icon-edit", link: "/major/wtbbs" },
        { title: "发动态", icon: "el-icon-help", link: "/major/wtdynamic" },
        {
          title: "写文章",
          icon: "el-icon-edit-outline",
          link: "/major/wtarticle"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.enter-active {
  color: #409eff;
}
.enter-active span {
  color: #409eff;
}
.enter-bar {
  width: 296px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.enter-bar-item {
  width: 98px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  background: #ffffffff;
  transition: all 0.5s ease;
}
.enter-bar-item:hover span {
  color: #409eff;
}
.enter-bar-item:hover {
  background: #8590a620;
}
span {
  color: #8590a6;
  transition: all 0.5s ease;
  font-size: 27px;
  line-height: 64px;
  vertical-align: bottom;
}
p {
  line-height: 10px;
  font-size: 16px;
  vertical-align: top;
}
</style>