<!--导航栏-->
<template>
  <div class="nav-bar">
    <slot name="logo"></slot>
    <slot name="plate-bar"></slot>
    <slot name="search"></slot>
    <slot name="message-bar"></slot>
    <slot name="person"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>