<!--小屏幕菜单呼出开关-->
<template>
  <div
    id="switch-tool"
    class="switch-tool"
    :class="{'switch-tool-true':switchVal}"
    @click="switchToolClick"
  >
    <span class="el-icon-s-unfold"></span>
  </div>
</template>

<script>
import { dragFunc } from "utlis/dragFunc";
export default {
  name: "SwitchTool",
  components: {},
  data() {
    return {
      switchVal: false
    };
  },
  mounted() {
    dragFunc("switch-tool");
  },
  computed: {},
  methods: {
    switchToolClick() {
      this.switchVal = !this.switchVal;
      this.$emit("switchToolClick", this.switchVal);
    }
  }
};
</script>

<style scoped>
.switch-tool {
  display: none;
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 40px;
  height: 40px;
  color: #8590a6;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  line-height: 40px;
  transition: transform 0.2s ease;
}
.switch-tool-true {
  transform: rotateY(180deg);
}
.switch-tool:active {
  color: #409eff;
  background: #eee;
}
@media screen and (max-width: 1000px) {
  .switch-tool {
    display: block;
  }
}
@media screen and (max-width: 425px) {
  .switch-tool {
    right: 15px;
  }
}
</style>