<template>
  <span class>
    <i v-if="gender==1" class="el-icon-male" style="color:#4174ff"></i>
    <i v-if="gender==2" class="el-icon-female" style="color: #ff579d"></i>
  </span>
</template>

<script>
export default {
  name: "GenderIco",
  components: {},
  data() {
    return {};
  },
  props: {
    gender: {
      type: Number
    }
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>