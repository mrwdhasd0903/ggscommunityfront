<!--阅读我的关注-->
<template>
  <div class>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.title}}{{index}}</li>
    </ul>
    <div v-loading="loading" ref="loading" class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "ReadMyfocus",
  components: {},
  data() {
    return {
      loading: false,
      push: [
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" }
      ],
      list: [
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" },
        { title: "标题标题" }
      ]
    };
  },
  computed: {},
  methods: {
    pushList() {
      try {
        //因为在路由销毁后还是会监听事件并执行下面代码,但是获取不到loading导致报错
        if (
          !this.loading &&
          this.getScrollTop() + window.innerHeight - 62 >=
            this.$refs.loading.offsetTop
        ) {
          this.loading = true;
          setTimeout(() => {
            this.list = this.list.concat(this.push);
            this.loading = false;
          }, 2000);
        }
      } catch (err) {
        console.log();
      }
    }
  },
  //获取来自跟路由的滚动高度和滚动监听
  inject: ["getScrollTop", "listenerScroll"],
  mounted() {
    this.listenerScroll(this.pushList);
  }
};
</script>

<style scoped>
li {
  line-height: 150px;
}
.loading {
  height: 100px;
}
</style>