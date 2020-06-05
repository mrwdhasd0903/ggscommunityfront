  <!-- 个人主页 -->
<template>
  <div class="main-profile">
    <div class="profile-item profile-header">
      <header-bar></header-bar>
    </div>
    <div class="profile-item profile-main">
      <!-- 二级路由 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="profile-right">
      <div class="profile-item profile-analysdata" :class="{'switch-true':switchVal}">
        <analysdata-bar></analysdata-bar>
      </div>
      <div class="profile-item profile-achievement" :class="{'switch-true':switchVal}">
        <achievement-bar></achievement-bar>
      </div>
      <div class="profile-item profile-copyright">
        <copyright></copyright>
      </div>
    </div>
    <switch-tool @switchToolClick="switchToolClick($event)"></switch-tool>
  </div>
</template>

<script>
import HeaderBar from "components/headerBar/HeaderBar";
import SwitchTool from "components/switchTool/SwitchTool";
import AnalysdataBar from "components/analysdataBar/AnalysdataBar";
import AchievementBar from "components/achievementBar/AchievementBar";
import Copyright from "components/copyright/Copyright";

export default {
  name: "MainProfile",
  components: {
    HeaderBar,
    Copyright,
    SwitchTool,
    AnalysdataBar,
    AchievementBar
  },
  data() {
    return {
      switchVal: false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    switchToolClick(switchVal) {
      this.switchVal = switchVal;
    }
  }
};
</script>

<style scoped>
.main-profile {
  max-width: 1000px;
  margin: 0 auto;
}
.main-profile:after {
  content: "";
  display: block;
  clear: both;
}
/* all=>item */
.profile-item {
  margin-top: 10px;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
/* top */
.profile-header {
  width: 1000px;
  float: left;
  height: 466px;
}
/* left */
.profile-main {
  max-width: 694px;
  width: 694px;
  min-height: 500px;
  float: left;
}
/* right */
.profile-right {
  float: right;
}
/* right=>item */
.profile-right .profile-item {
  max-width: 296px;
  width: 296px;
  /* height: 200px; */
}
.profile-right .profile-copyright {
  background: none;
  box-shadow: none;
}
@media screen and (max-width: 1000px) {
  .profile-right .profile-copyright {
    display: none;
  }
  /* top */
  .profile-header {
    max-width: 100%;
    height: 466px;
  }
  .profile-item {
    margin-top: 0;
  }
  .profile-main {
    max-width: 100%;
    width: 100%;
  }
  .profile-analysdata {
    position: fixed;
    top: 100px;
    right: -300px;
    transition: all 0.2s ease;
  }
  .profile-achievement {
    position: fixed;
    top: 300px;
    right: -300px;
    transition: all 0.2s ease;
  }
  .switch-true {
    right: 10px;
  }
}
@media screen and (max-width: 768px) {
  .profile-header {
    height: 354px;
  }
}
@media screen and (max-width: 425px) {
  .profile-header {
    height: 194px;
  }
}
</style>