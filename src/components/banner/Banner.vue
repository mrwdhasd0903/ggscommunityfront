<!--banner栏-->
<template >
  <a v-if="banner.switch" target="_blank" :href="banner.href">
    <img :src="banner.src" @load="bannerLoad" alt />
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
          "https://th.wallhaven.cc/lg/dg/dgzj9o.jpg",
        href: "#", //链接地址
        switch: true //是否展示
      }
    };
  },
  computed: {},
  methods: {
    bannerLoad() {
      this.$emit("bannerLoad");
    }
  }
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