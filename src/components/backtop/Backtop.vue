<!--返回顶部-->
<template>
  <div id="backtop" @click="backtopClick" class="backtop">
    <i class="el-icon-caret-top"></i>
  </div>
</template>

<script>
import { dragFunc } from "utlis/dragFunc";
export default {
  name: "Backtop",
  components: {},
  data() {
    return {};
  },
  mounted() {
    dragFunc("backtop");
  },
  computed: {},
  methods: {
    backtopClick() {
      this.$emit("backtopClick");
    }
  }
};
</script>

<style scoped>
.backtop {
  cursor: pointer;
  position: fixed;
  bottom: 52px;
  right: 100px;
  width: 40px;
  height: 40px;
  color: #8590a6;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  line-height: 40px;
  transition: color 0.2s ease;
}
.backtop:hover {
  color: #409eff;
  background: #eee;
}
@media screen and (max-width: 425px) {
  .backtop {
    right: 15px;
  }
}
</style>