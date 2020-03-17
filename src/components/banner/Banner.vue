<!--banner栏-->
<template >
  <a v-if="banner.switch" target="_blank" :href="banner.href">
    <img :src="banner.src" alt />
  </a>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  data() {
    return {
      banner: {
        //图片地址
        src:
          "http://47.113.92.137:8888/upload/img/2020/03/07-08-55==075449.jpg",
        href: "#", //链接地址
        switch: true //是否展示
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
img {
  max-width: 100%;
  border-radius: 2px;
  line-height: 0;
}
a {
  border-radius: 2px;
  display: block;
  width: 296px;
}
</style>