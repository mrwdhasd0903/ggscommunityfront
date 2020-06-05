<!-- 文章详情 -->
<template>
  <div class="articledetails" v-if="articleData">
    <div class="article-title">
      <i @click="routerBack" class="el-icon-d-arrow-left"></i>
      <span>{{articleData.title}}</span>
    </div>

    <div class="article-author">
      <div class="author-img">
        <img :src="articleData.avatar" />
      </div>
      <div class="author-name">
        <span>{{articleData.nickname}}</span>
      </div>
      <div class="author-introduce">
        <span>{{articleData.motto}}</span>
      </div>
      <div @click="focusClick" class="author-focus">
        <el-button
          size="mini"
          :icon="articledetailsData.isFocus ? 'el-icon-close': 'el-icon-check'"
          :type="articledetailsData.isFocus ? 'info': 'primary'"
        >{{this.articledetailsData.isFocus ? "取消关注" : "关注"}}</el-button>
      </div>
      <div class="article-msg">
        <span
          class="divide-item"
          v-for="(item,index) in articleData.labelArr"
          :key="index"
        >{{item.labelName}}</span>
        <span>{{articleData.readCount}}阅读</span>
        <span style="margin-right:0px">{{articleData.createTime.substring(0,10)}}</span>
      </div>
    </div>

    <!-- <div v-highlight class="article-content typo" v-html="articledetailsData.content"></div> -->
    <mavon-editor
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :subfield="false"
      :boxShadow="false"
      :editable="false"
      :ishljs="true"
      style="z-index: 99 !important;min-height:800px"
      v-model="articleData.articleContent"
    ></mavon-editor>
    <div class="fixed-bar" :class="isFixedUp?'fixed-bar-up':''">
      <el-button
        @click="praiseClick"
        class="praise-bar"
        size="small"
        type="primary"
        icon="el-icon-caret-top"
        :plain="this.articledetailsData.isPraise ? false :true"
      >{{(this.articledetailsData.isPraise ? "已赞同 " : "赞同 ")+articleData.likeCount}}</el-button>
      <el-button
        @click="starClick"
        class="star-bar"
        type="primary"
        :plain="this.articledetailsData.isStar ? false :true"
        icon="el-icon-star-on"
        size="small"
      >{{(this.articledetailsData.isStar ? "已收藏 " : "收藏 ")+articleData.starCount}}</el-button>
      <span
        @click="fixedUp(true)"
        class="comment-bar el-icon-s-comment"
      >评论 {{articleData.commentCount}}</span>
      <p class="fixed-down" @click="fixedUp(false)">
        <i class="el-icon-arrow-down"></i>收起评论
      </p>
      <article-comment></article-comment>
    </div>
  </div>
</template>

<script>
import ArticleComment from "components/articleComment/ArticleComment";
import { findById } from "network/article";
export default {
  name: "MajorArticledetails",
  components: { ArticleComment },
  computed: {},
  data() {
    return {
      articleData: null,
      articledetailsData: {
        // 作者头像
        headerimg:
          "http://47.113.92.137:8888/upload/io/img/2020/4/11/1586535025470.jpg",
        // 作者个人介绍
        introduce: "计算机系的一位靓仔",
        //作者昵称
        headername: "刘胖虎",
        //点赞数
        praiseCount: 88,
        // 收藏数
        starCount: 31,
        //阅读数
        readCount: 222,
        // 评论数
        commentCount: 102,
        //标题
        title: "浅入浅出谈谈个人对前后端分离开发模式的理解",
        //发表时间
        publishedTime: "2020-02-23",
        //内容
        content:
          '因为谷歌拓展程序商城需要翻墙才能访问，所以选择去github下载源码进行编译然后手动安装1. 访问github下载源码，源码地址   - [https://github.com/vuejs/vue-devtools.git](http://github.com/vuejs/vue-devtools.git)   - 根据下图操作选择版本后下载zip压缩包，注意：如果没有要求的话建议不要选择5以上的，在我的机子编译会报错，这里以版本4.1.4为例   ![111.jpg](http://47.113.92.137:8888/upload/io/img/2020/02/07-23-00==038739.jpg)2. 下载完后解压缩包得到项目，因为在安装完后不删除项目，所以解压路径选择平时安装软件的位置3. 调出cmd命令行工具进入解压项目的根目录（建议以管理员打开cmd）我这里的目录是D盘，使用cd命令进入   ![2222.jpg](http://47.113.92.137:8888/upload/io/img/2020/02/07-23-14==011981.jpg)4. 输入npm命令安装依赖（过程有点长，耐心等待）```shellnpm install```- 输入npm命令编译项目```shellnpm run build```- 编译完后，用记事本打开\vue-devtools-4.1.4shellschrome里面的**manifest.json**文件，找到**"persistent": false**，修改为```javascript"persistent": true```- 进入谷歌浏览器的**拓展程序**页面，打开**开发者模式-加载已解压的拓展程序**![33333.jpg](http://47.113.92.137:8888/upload/io/img/2020/02/07-23-28==012533.jpg)- 选择项目目录下shells的**chrome**文件夹![44444.jpg](http://47.113.92.137:8888/upload/io/img/2020/02/07-23-32==003539.jpg)- 安装完成![5555.jpg](http://47.113.92.137:8888/upload/io/img/2020/02/07-23-33==010844.jpg)如果过程出现问题无法解决，我已经将插件打包好了，直接拖到浏览器里面就完成安装链接：[https://pan.baidu.com/s/1-Hv8y4zubRBQtIbWQyimsQ](http://pan.baidu.com/s/1-Hv8y4zubRBQtIbWQyimsQ) 提取码：72dp```xml<dependency>  <groupId>org.springframework.boot</groupId>  <artifactId>spring-boot-starter-jdbc</artifactId></dependency><dependency>  <groupId>mysql</groupId>  <artifactId>mysql-connector-java</artifactId>  <scope>runtime</scope></dependency>```}```| **说明**       | **表达式语法** || -------------- | -------------- || 变量表达式     | ${...}         || 选择变量表达式 | *{...}         || 消息表达式     | #{...}         || 链接URL表达式  | @{...}         || 片段表达式     | ~{...}         |',
        //分类数组
        divideArr: ["分类一", "分类二", "分类三"],
        //是否关注
        isFocus: false,
        //是否收藏
        isStar: false,
        //是否点赞
        isPraise: false
      },
      isFixedUp: false
    };
  },
  deactivated() {
    this.articleData = null;
    this.listenerScroll(this.fixeBar, false);
  },
  activated() {
    findById({ articleId: this.$route.params.id }).then(res => {
      this.articleData = res.data[0];
      setTimeout(() => {
        this.fixeBar();
      });
    });
    this.listenerScroll(this.fixeBar, true);
    this.rootRrouterScrollTo(0);
  },
  watch: {
    isFixedUp(newName, oldName) {
      if (newName) {
        // findPage({
        // })
      }
    }
  },
  inject: ["rootRrouterScrollTo", "listenerScroll", "getScrollTop"],
  methods: {
    //评论板块升降
    fixedUp(flag) {
      this.isFixedUp = flag;
    },
    //点赞点击
    praiseClick() {
      this.articledetailsData.isPraise = !this.articledetailsData.isPraise;
    },
    //收藏点击
    starClick() {
      this.articledetailsData.isStar = !this.articledetailsData.isStar;
    },
    //评论点击
    //关注点击
    focusClick() {
      this.articledetailsData.isFocus = !this.articledetailsData.isFocus;
    },
    //路由返回
    routerBack() {
      this.$router.back(-1);
    },
    //fixeBar
    fixeBar() {
      try {
        document.getElementsByClassName("fixed-bar")[0].style.top =
          document.documentElement.clientHeight +
          this.getScrollTop() -
          122 +
          "px";
      } catch (error) {}
    }
  },
  mounted() {
    // var lables = document.querySelectorAll(".table");
    // lables.forEach(function(lable, index) {
    //   var ele = document.createElement("div");
    //   ele.className = "table-div";
    //   lable.parentNode.replaceChild(ele, lable);
    //   ele.appendChild(lable);
    // });
  }
};
</script>
<style>
.article-content img {
  max-width: 100%;
}
code {
  overflow: auto;
  border-radius: 3px;
  font-family: "DSM";
  font-size: 15px;
  line-height: 23px;
}
pre {
  font-family: "DSM";
}
</style>
<style scoped>
@import "~assets/typora.css";
.star-bar,
.praise-bar {
  font-size: 12px;
  margin: 9px;
}
.comment-bar {
  margin: 9px;
  color: #747f95;
  font-size: 14px;
  cursor: pointer;
}
.articledetails {
  position: relative;
}
.fixed-bar {
  overflow: hidden;
  height: 50px;
  width: 100%;
  background: #fff;
  z-index: 9999;
  box-shadow: 0 -1px 3px 0 rgba(26, 26, 26, 0.1);
  position: absolute;
  left: 0;
  transition: transform 0.2s ease;
}
.fixed-bar-up {
  height: 650px;
  transform: translateY(-600px);
}
.fixed-down {
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
.fixed-down:hover {
  color: #409eff;
}
.divide-item {
  background: #ecf5ff;
  color: #409eff;
  border: 1px solid #b3d8ff;
  border-radius: 4px;
  font-size: 10px;
  padding: 1px;
}
.article-msg > span {
  margin-right: 10px;
}
.article-content {
  border-top: 1px solid #bbb;
  margin-top: 40px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 60px;
}

.article-title {
  font-weight: 600;
  font-size: 25px;
  word-wrap: break-word;
  margin: 10px;
}
.article-author {
  margin: 15px;
  margin-bottom: 26px;
  cursor: pointer;
  position: relative;
}
.author-img {
  width: 38px;
  height: 38px;
}
.author-img > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.article-msg {
  color: #666;
  position: absolute;
  top: 40px;
  font-size: 14px;
  right: 0;
}
.author-focus {
  position: absolute;
  right: 0;
  top: 0;
}
.author-name {
  font-weight: 600;
  font-size: 15px;
  color: #222;
  position: absolute;
  top: 0;
  left: 50px;
  height: 19px;
}
.author-introduce {
  font-size: 14px;
  color: #646464;
  position: absolute;
  top: 19px;
  left: 50px;
  height: 19px;
}
i {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}
i:hover {
  color: #409eff;
}
@media screen and (max-width: 425px) {
  .article-author {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>