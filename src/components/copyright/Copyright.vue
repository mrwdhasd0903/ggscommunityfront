<!--备案信息版权栏-->
<template>
  <div class="copyright">
    <a class="Footer-item" target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn">
      <img src="http://www.beian.gov.cn/img/ico.ico" />
      {{copyright.copyrightMsg}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  components: {},
  data() {
    return {
      copyright: {
        copyrightMsg: "粤ICP备20013408号-1"
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.copyright {
  width: 296px;
}
div {
  text-align: center;
}
a {
  font-size: 13px;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #8590a6;
}
</style>