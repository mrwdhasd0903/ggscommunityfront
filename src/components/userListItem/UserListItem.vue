<template>
  <div class="UserListItem">
    <el-avatar style="font-size:36px" icon="el-icon-user-solid" :size="60" :src="item.headImg"></el-avatar>
    <p class="name">
      <span>
        {{item.name}}
        <gender-ico :gender="item.gender"></gender-ico>
      </span>
      <el-button
        size="mini"
        @click="focusClick(index)"
        :icon="item.isFocus ? 'el-icon-close': 'el-icon-check'"
        :type="item.isFocus ? 'info': 'primary'"
      >{{item.isFocus ? "取消关注" : "关注"}}</el-button>
    </p>
    <p class="msg">
      稿件：
      <span class="manuscriptCount">{{item.manuscriptCount}}</span>
      粉丝：
      <span class="fansCount">{{item.fansCount}}</span>
    </p>
    <p class="introduce">{{item.introduce}}</p>
    <div class>
      <el-button class="profile">个人主页</el-button>
    </div>
  </div>
</template>

<script>
import GenderIco from "components/genderIco/GenderIco";

export default {
  name: "UserListItem",
  components: { GenderIco },
  props: {
    item: null,
    index: null,
    focusClick: null
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.UserListItem {
  position: relative;
  margin: 20px;
}
p {
  position: absolute;
  left: 80px;
}
.name {
  top: 2px;
  line-height: 21px;
  vertical-align: middle;
  font-size: 16px;
  color: #222;
  font-weight: 700;
}

.name > span {
  margin-right: 20px;
}
.msg {
  top: 31px;
  font-size: 12px;
  color: #6d757a;
}
.introduce {
  top: 48px;
  width: 750px;
  font-size: 12px;
  color: #6d757a;
}
.profile {
  position: absolute;
  top: 21px;
  right: 0;
}
</style>