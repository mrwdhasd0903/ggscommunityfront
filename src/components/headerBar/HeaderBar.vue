<!--个人主页信息-->
<template>
  <div class="header-bar" :style="{ 'background-image':'url('+HeaderMsg.cover+')'}">
    <div class="header-img">
      <img :src="HeaderMsg.headerimg" alt />
    </div>
    <div class="header-msg">
      <p class="headername">
        {{HeaderMsg.headername}}
        <i
          v-if="HeaderMsg.gender==1"
          class="el-icon-male"
          style="color:#4174ff"
        ></i>
        <i v-if="HeaderMsg.gender==2" class="el-icon-female" style="color: #ff579d"></i>
      </p>
      <p class="personality">{{HeaderMsg.personality}}</p>
      <p class="introduce">
        <i class="el-icon-user-solid"></i>
        {{HeaderMsg.introduce}}
      </p>
    </div>
    <div class="update-msg" v-if="HeaderMsg.isThis">
      <updatemsg-btn></updatemsg-btn>
    </div>
  </div>
</template>

<script>
import UpdatemsgBtn from "components/updatemsgBtn/UpdatemsgBtn";
export default {
  name: "HeaderBar",
  components: { UpdatemsgBtn },
  data() {
    return {
      HeaderMsg: {
        cover:
          "http://47.113.92.137:8888/upload/img/2020/03/10-13-54==002853.jpg",
        headerimg: "http://47.113.92.137:8888/img/theme/headimg_sm.jpg",
        headername: "蚉螡斔螤",
        gender: 1,
        introduce: "计算机系的一位靓仔",
        personality: "天有多高我有多骚",
        isThis: true
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.update-msg {
  text-align: right;
}
.header-bar {
  height: 100%;
  background-size: 100% 100%;
  position: relative;
}
.header-img {
  position: absolute;
  left: 25px;
  bottom: 25px;
  width: 160px;
  height: 160px;
  border: 4px solid #fff;
  border-radius: 2px;
  background: #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
}
p {
  padding: 6px;
}
.header-msg {
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 200px;
  border-radius: 2px;
  bottom: 25px;
}
.headername {
  font-weight: 700;
  font-size: 26px;
}
.headername i {
  font-size: 25px;
}
.personality {
  font-size: 17px;
  font-weight: 700;
}
.introduce {
  font-size: 15px;
}
.introduce i {
  color: #535b6b;
}
@media screen and (max-width: 768px) {
  .header-img {
    width: 120px;
    height: 120px;
  }
  p {
    padding: 3px 6px;
  }
  .header-msg {
    left: 160px;
  }
}
@media screen and (max-width: 425px) {
  .header-img {
    left: 50%;
    transform: translateX(-50%);
    top: 25px;
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  .header-msg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    top: 95px;
    bottom: auto;
  }
  .headername {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }
  .headername i {
    font-size: 20px;
  }

  .personality {
    text-align: center;
    font-size: 15px;
    font-weight: 400;
  }
  .introduce {
    font-size: 12px;
  }
}
</style>