<!--修改个人信息-->
<template>
  <router-link tag="div" to="/profile/update">
    <i class="el-icon-edit">
      <span>编辑个人信息</span>
    </i>
  </router-link>
</template>

<script>
export default {
  name: "UpdatemsgBtn",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
div {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  border-radius: 0 0 0 30px;
  width: 20px;
  height: 20px;
  padding: 10px;
  white-space: nowrap;
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;
}
span {
  margin-left: 10px;
  font-size: 16px;
}
div:hover {
  width: 120px;
}
@media screen and (max-width: 425px) {
  div {
    width: 15px;
    height: 15px;
    font-size: 15px;
    padding: 8px;
    border-radius: 0 0 0 20px;
  }
  span {
    font-size: 12px;
  }
  div:hover {
    width: 100px;
  }
}
</style>