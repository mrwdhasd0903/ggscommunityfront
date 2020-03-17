 <!-- 导航栏 -->
<template>
  <div id="navBar" class="nav-bar">
    <div class="in-nav-bar">
      <div class="logo">
        <img src="http://47.113.92.137:8888/img/theme/logo.png" @load="setNavTop" />
      </div>
      <div @mouseleave="replyCurrentNav" class="plate-bar" ref="MainHeader">
        <router-link
          v-for="(item,index) in plateMenu"
          :key="index"
          tag="span"
          :to="item.link"
          @click.native="routerlinkClick"
          @mouseenter.native="setCurrentNav(index)"
        >{{item.text}}</router-link>
        <div class="slideline" :style="currentNavStyle"></div>
      </div>
      <div class="search">
        <el-autocomplete
          size="small"
          class="inline-input"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
          @blur="navSearch"
          @focus="navSearchFocus"
          suffix-icon="el-icon-search"
        ></el-autocomplete>
        <!-- <el-button size="small" type="primary">搜索</el-button> -->
      </div>
      <div class="message-bar">
        <i class="el-icon-bell xs-display-none"></i>
        <el-badge
          @click.native="routerPush('/profile/list/message')"
          :is-dot="haveNewMessage"
          class="item el-icon-bell"
        >
          <span class></span>
        </el-badge>
        <el-badge :is-dot="haveNewChat" class="item el-icon-chat-line-round">
          <span></span>
        </el-badge>
      </div>
      <div class="person">
        <el-dropdown>
          <img type="primary" src="http://47.113.92.137:8888/img/theme/headimg_sm.jpg" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link tag="span" to="/profile" class="el-icon-user-solid">个人主页</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <span class="el-icon-s-tools">账号设置</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span class="el-icon-switch-button">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="el-icon-arrow-down" id="navSwitch" @click="navSwitchClick"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",
  components: {
    // NavBar
  },
  data() {
    return {
      plateMenu: [
        { link: "/major/read", text: "首页" },
        { link: "/major/notice", text: "公告" },
        { link: "/tools", text: "工具" }
      ],
      restaurants: [],
      state: "",
      currentNavStyle: { width: "33.3%", left: "0" },
      haveNewMessage: false,
      haveNewChat: true,
      navSwitchVal: false,
      navBarTop: 0
    };
  },
  watch: {
    //监听路由回复下划线
    $route: "replyCurrentNav"
  },
  computed: {},
  methods: {
    routerPush(string) {
      if (this.$route.fullPath.indexOf(string)) {
        this.$router.push(string);
      }
    },
    routerlinkClick() {
      this.navSwitchClick();
    },
    //输入框点击触发
    navSearchFocus() {
      document.getElementsByClassName("inline-input")[0].style.width = "100%";
    },
    //搜索
    navSearch() {
      document.getElementsByClassName("inline-input")[0].style.width = "60%";
      console.log(this.state);
    },
    //回复至和路由相同的控制器
    replyCurrentNav() {
      setTimeout(() => {
        for (let index in this.plateMenu) {
          if (this.$route.path.indexOf(this.plateMenu[index].link) != -1) {
            this.setCurrentNav(index);
          } else if (this.$route.path.indexOf("wt") != -1) {
            this.setCurrentNav(0);
          }
        }
      }, 400);
    },
    //设置当前鼠标经过的控制器
    setCurrentNav(index) {
      this.currentNavStyle.width = "33.3%";
      this.currentNavStyle.left = 33.3 * index + "%";
    },
    // 搜索框改变时调用的函数
    // queryString搜索框的值
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      //搜索框的值如果为空,展示所有restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    // 将restaurants过滤
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    // 点击搜搜索内容触发的函数
    handleSelect(item) {
      console.log(item);
    },
    //导航栏高度偏移调整
    setNavTop() {
      let navBar = document.getElementById("navBar");
      this.navBarTop = "-" + (navBar.offsetHeight - 52) + "px";
      navBar.style.top = this.navBarTop;
      if (navBar.offsetHeight == 52) {
        document.getElementById("navSwitch").style.display = "none";
      } else {
        document.getElementById("navSwitch").style.display = "";
      }
    },
    //伸缩开关点击
    navSwitchClick() {
      this.navSwitchVal = !this.navSwitchVal;
      if (this.navSwitchVal) {
        document.getElementById("navSwitch").style.transform =
          "rotateX(180deg)";
        document.getElementById("navBar").style.top = "0px";
      } else {
        document.getElementById("navSwitch").style.transform = "rotateX(0deg)";
        document.getElementById("navBar").style.top = this.navBarTop;
      }
    }
  },
  created() {},
  mounted() {
    this.restaurants = this.loadAll();
    this.setNavTop();
    this.replyCurrentNav();
  }
};
</script>
<style>
.search span {
  cursor: pointer;
  color: #409eff;
}
</style>
<style scoped>
.inline-input {
  width: 60%;
  transition: all 0.3s ease;
}
.nav-bar {
  line-height: 52px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  position: fixed;
  z-index: 999;
  transition: all 0.2s ease;
  width: 100%;
  top: 0;
}
.message-bar > .item:hover {
  transform: scale(1.1);
  transition: all 0.2s ease;
  cursor: pointer;
}
.in-nav-bar {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.plate-bar {
  position: relative;
  font-size: 15px;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.message-bar {
  font-size: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

span {
  cursor: pointer;
}
.logo,
.person,
.message-bar,
.search,
.plate-bar {
  /* display: inline-block; */
  line-height: 52px;
  height: 52px;
  vertical-align: top;
  padding: 0 1px;
}
.search {
  padding-left: 10px;
  flex-grow: 1;
  white-space: nowrap;
}
.person img {
  border-radius: 2px;
  margin-top: 11px;
  width: 31px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.slideline {
  position: absolute;
  bottom: 0;
  display: block;
  height: 2px;
  background-color: #409eff;
  transition: all 0.2s ease-out;
}
.xs-display-none {
  opacity: 0;
}
#navSwitch {
  line-height: 52px;
  vertical-align: top;
  transition: all 0.2s ease;
}
@media screen and (max-width: 767px) {
  .xs-display-none {
    display: none;
  }
}
</style>