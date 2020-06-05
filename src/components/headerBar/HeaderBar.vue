<!--个人主页信息-->
<template>
  <div class="header-bar" :style="{ 'background-image':'url('+HeaderMsg.cover+')'}">
    <div class="header-img">
      <el-avatar
        class="header-avatar"
        icon="el-icon-user-solid"
        shape="square"
        :src="HeaderMsg.headerimg"
      ></el-avatar>
    </div>
    <div class="header-msg">
      <p class="headername">
        {{HeaderMsg.headername}}
        <gender-ico :gender="HeaderMsg.gender"></gender-ico>
      </p>
      <p class="personality">{{HeaderMsg.personality}}</p>
      <p class="introduce">
        <i class="el-icon-user-solid"></i>
        {{HeaderMsg.introduce}}
      </p>
    </div>
    <div v-if="!uid" class="update-msg">
      <updatemsg-btn></updatemsg-btn>
    </div>
  </div>
</template>

<script>
import GenderIco from "components/genderIco/GenderIco";
import UpdatemsgBtn from "components/updatemsgBtn/UpdatemsgBtn";
export default {
  name: "HeaderBar",
  components: { UpdatemsgBtn, GenderIco },
  data() {
    return {
      HeaderMsg: {
        cover: "https://w.wallhaven.cc/full/5w/wallhaven-5w6319.jpg",
        headerimg:
          "http://47.113.92.137:8888/upload/io/img/2020/4/11/1586535025470.jpg",
        headername: "蚉螡斔螤",
        gender: 1,
        introduce: "计算机系的一位靓仔",
        personality: "天有多高我有多骚",
        isThis: true
      },
      uid: null
    };
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      //如果是个人信息页面
      if (to.path.indexOf("/profile/list") != -1) {
        this.uid = this.$route.query.uid;
      }
    }
  },
  mounted() {
    this.uid = this.$route.query.uid;
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
.header-avatar {
  width: 100%;
  height: 100%;
  font-size: 84px;
  line-height: 153px;
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
  .header-avatar {
    font-size: 59px;
    line-height: 122px;
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
  .header-avatar {
    font-size: 34px;
    line-height: 61px;
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