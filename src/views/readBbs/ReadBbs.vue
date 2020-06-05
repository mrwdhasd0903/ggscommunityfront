<!--阅读帖子分类-->
<template>
  <div class>
    <div id="bbsBar" class="bbs-bar">
      <el-checkbox-group
        size="mini"
        @change="passDivide"
        text-color="#409EFF"
        fill="#edf6ff"
        :min="1"
        v-model="checkboxGroup"
      >
        <el-checkbox-button
          v-for="(item,index) in type"
          :label="String(item.tid)"
          :key="'type'+index"
        >{{item.name}}</el-checkbox-button>
      </el-checkbox-group>
      <span @click="bbsSwitchClick" id="bbsSwitch" class="el-icon-arrow-down"></span>
    </div>
    <!-- 四级路由 -->
    <transition name="fade" mode="out-in">
      <router-view :key="activeDate"></router-view>
    </transition>
  </div>
</template>

<script>
import { setCookie, getCookie } from "utlis/cookie";
import { findByDelFlag } from "network/topic";
export default {
  name: "ReadBbs",
  components: {},
  data() {
    return {
      checkboxGroup: [],
      type: [],
      bbsBarHeight: "auto",
      bbsSwitchVal: false,
      //用于刷新路由
      activeDate: 1
    };
  },
  methods: {
    //请求获取类型
    getType() {
      findByDelFlag({ page: 1, size: 100 }).then(res => {
        if (res.code == 0) {
          this.type = res.data;
        } else {
          console.log(res);
        }
      });
    },
    //请求获取类型(已选)
    getType2checkboxGroup() {
      findByDelFlag({ page: 1, size: 100 }).then(res => {
        if (res.code == 0) {
          this.checkboxGroup = res.data.map(item => {
            return String(item.tid);
          });
          console.log(this.checkboxGroup);
          this.passDivide();
        } else {
          console.log(res);
        }
      });
    },
    String(num) {
      return String(num);
    },
    //伸缩开关点击
    bbsSwitchClick() {
      this.bbsSwitchVal = !this.bbsSwitchVal;
      if (this.bbsSwitchVal) {
        document.getElementById("bbsSwitch").style.transform = "rotate(180deg)";
        document.getElementById("bbsBar").style.height = this.bbsBarHeight;
      } else {
        document.getElementById("bbsSwitch").style.transform = "rotate(0deg)";
        document.getElementById("bbsBar").style.height = "44px";
      }
    },
    //路由传参
    passDivide() {
      setCookie("bbsdivide", this.checkboxGroup,10);
      console.log(this.checkboxGroup);
      this.activeDate++;
    },
    //设置CheckboxGroup
    setCheckboxGroup() {
      this.getType();
      if (getCookie("bbsdivide")) {
        this.checkboxGroup = getCookie("bbsdivide").split(",");
      } else {
        this.getType2checkboxGroup();
      }
    }
  },
  mounted() {
    //伸缩高度调整
    let bbsBar = document.getElementById("bbsBar");
    // this.bbsBarHeight = bbsBar.offsetHeight + "px";
    if (bbsBar.offsetHeight >= 50) {
      bbsBar.style.height = "44px";
    } else {
      document.getElementById("bbsSwitch").style.display = "none";
    }
    //根据cookie设置CheckboxGroup的值
    this.setCheckboxGroup();
  }
};
</script>

<style scoped>
/* 路由动画开始 */
.fade-enter {
  margin-left: 100%;
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave {
  margin-left: 0;
  opacity: 1;
}
.fade-leave {
  transition: all 0.3s ease;
}
/* 路由动画结束 */
.bbs-bar {
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
#bbsSwitch {
  position: absolute;
  top: 14px;
  right: 4px;
  transition: all 0.3s ease;
}
label {
  margin: 8px;
}
</style>
<style>
#bbsBar .el-checkbox-button__inner {
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
}
#bbsBar .el-checkbox-button.is-focus .el-checkbox-button__inner {
  border-color: #dcdfe6;
}
</style>