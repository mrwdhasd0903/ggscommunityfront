<!--帖子详情-->
<template>
  <div class="bbs-details">
    <div class>
      <i @click="routerBack" class="el-icon-d-arrow-left"></i>
      <!-- ---------------页头按钮组 -->
      <el-button-group class="btn-bar">
        <el-button size="mini">只看楼主</el-button>
        <el-button size="mini" icon="el-icon-sort">倒序</el-button>
        <el-button size="mini" icon="el-icon-star-on">收藏</el-button>
        <el-popover placement="bottom-end">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea"></el-input>
          <el-button type="primary" style="margin-right:10px;margin-top:10px" size="small" plain>确定</el-button>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            style="display:inline"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary" icon="el-icon-picture-outline" plain></el-button>
          </el-upload>
          <el-button slot="reference" size="mini" icon="el-icon-chat-line-square">回复</el-button>
        </el-popover>
      </el-button-group>
      <p class="bbs-title">{{title}}</p>
      <!-- -------------------上分页组件 -->
      <el-pagination
        :pager-count="5"
        :background="true"
        :small="isSmall"
        class="handlePage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageData.commentPage"
        :page-size="pageData.commentSize"
        layout="prev, pager, next, jumper"
        :total="pageData.totalCount"
      ></el-pagination>
      <!-- ---------------------内容列表 -->
      <div class="details-list">
        <div class="list-item" v-for="(item,index) in bbsReplyData" :key="'bbsReplyData'+index">
          <!-- --------------------hover 头像弹层 -->
          <el-popover @show="headShow(item.userId)" placement="top-start" trigger="hover">
            <el-button-group class="pop-up-btn-bar">
              <el-button size="mini">关注</el-button>
              <el-button @click="jumpProfile(item.userId)" size="mini">个人主页</el-button>
            </el-button-group>
            <div class="header-msg">
              <p>
                {{memberMag.memberNickname}}
                <gender-ico :gender="hoverMsg.gender"></gender-ico>
              </p>
              <p>{{hoverMsg.personality}}</p>
              <p>{{memberMag.motto}}</p>
            </div>
            <el-avatar
              slot="reference"
              class="item-headimg"
              shape="square"
              icon="el-icon-user-solid"
              :size="50"
              :src="item.avatar"
            ></el-avatar>
          </el-popover>

          <el-tag class="floor-master-tag" v-if="item.isAuthor" size="small">楼主</el-tag>
          <span class="user-name">{{item.nickname}}</span>
          <el-tag class="floor-tag" size="small">{{item.floor}}楼</el-tag>
          <!-- <el-tag class="floor-tag" size="small">x楼</el-tag> -->
          <p class="item-content">{{item.content}}</p>
          <p style="text-align: right;">
            <span class="item-public-span">{{item.createTime}}</span>
            <!-- ---------------------回复组件 -->
            <el-popover placement="left">
              <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea"></el-input>
              <el-button
                type="primary"
                style="margin-right:10px;margin-top:10px"
                size="small"
                plain
              >确定</el-button>
              <span slot="reference" class="item-reply-a">回复</span>
            </el-popover>
          </p>
          <!-- -------------子回复 -->
          <div class="childrenList" v-if="item.replies.length>0">
            <span class="el-icon-caret-top"></span>
            <div
              class="childrenList-item"
              v-for="(childrenItem,index) in item.replies"
              :key="'children'+index"
            >
              <!-- --------------------hover 头像弹层 -->
              <el-popover @show="headShow(item.userId)" placement="top-start" trigger="hover">
                <el-button-group class="pop-up-btn-bar">
                  <el-button size="mini">关注</el-button>
                  <el-button @click="jumpProfile(childrenItem.userId)" size="mini">个人主页</el-button>
                </el-button-group>
                <div class="header-msg">
                  <p>
                    {{memberMag.memberNickname}}
                    <gender-ico :gender="hoverMsg.gender"></gender-ico>
                  </p>
                  <p>{{hoverMsg.personality}}</p>
                  <p>{{memberMag.motto}}</p>
                </div>
                <el-avatar
                  slot="reference"
                  class="item-headimg"
                  icon="el-icon-user-solid"
                  shape="square"
                  :size="50"
                  :src="item.avatar"
                ></el-avatar>
              </el-popover>

              <el-tag class="floor-master-tag" v-if="item.isAuthor" size="small">楼主</el-tag>
              <span class="user-name">
                <span class="children-item-name">{{childrenItem.nickname}}</span> 回复
                <span class="children-item-parentName">{{childrenItem.repliedNickname}}</span> ：
              </span>
              <!-- <span class="children-item-parentName">{{childrenItem.parentName}}</span> ： -->
              <p class="children-item-content">{{childrenItem.content}}</p>
              <p style="text-align: right;">
                <span class="item-public-span">{{childrenItem.createTime}}</span>
                <!-- ---------------------回复组件 -->
                <el-popover placement="left">
                  <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea"></el-input>
                  <el-button
                    type="primary"
                    style="margin-right:10px;margin-top:10px"
                    size="small"
                    plain
                  >确定</el-button>
                  <span slot="reference" class="item-reply-a">回复</span>
                </el-popover>
              </p>
            </div>
            <p
              @click="moreReply(index)"
              v-if="item.replyCount-item.replies.length>0"
              class="load-more-a"
            >加载更多({{item.replyCount-item.replies.length}})</p>
          </div>
        </div>
      </div>
      <!-- ---------------------下分页组件 -->
      <el-pagination
        :pager-count="5"
        :background="true"
        class="handlePage"
        :small="isSmall"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageData.commentPage"
        :page-size="pageData.commentSize"
        layout="prev, pager, next, jumper"
        :total="pageData.totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import GenderIco from "components/genderIco/GenderIco";
import { findPage, CommentfindPage } from "network/tieziComment";
import { findById } from "network/tiezi";
import { memberFindById } from "network/member";
export default {
  name: "MajorBbsdetails",
  components: { GenderIco },
  data() {
    return {
      //文件列表
      fileList: [],
      //帖子标题
      title: "上单现在有能媲美铁男的嘛？",
      //头像停留信息
      hoverMsg: {
        headername: "蚉螡斔螤",
        gender: 2,
        introduce: "计算机系的一位靓仔",
        personality: "天有多高我有多骚"
      },
      memberMag: {},
      pageData: {
        tieziId: "",
        orderBy: 1,
        commentPage: 1,
        commentSize: 10,
        replyPage: 1,
        replySize: 5,
        totalCount: null
      },
      //回复内容
      textarea: "",
      //楼层列表
      bbsReplyData: {},
      currentPage: 1
    };
  },
  activated() {
    //滚动置顶
    this.rootRrouterScrollTo(0);
    this.pageData.tieziId = this.$route.params.id;
    this.getPageData();
    this.getPostMsg();
  },
  deactivated() {
    //重置
    this.bbsReplyData = {};
    this.textarea = "";
  },
  computed: {
    //小屏幕展示小分页组件
    isSmall() {
      return document.documentElement.clientWidth < 450;
    }
  },
  inject: ["rootRrouterScrollTo"],
  mounted() {},
  methods: {
    //头像弹层
    headShow(uid) {
      memberFindById({ memberId: uid }).then(res => {
        this.memberMag = res.data[0];
      });
    },
    //个人主页跳转
    jumpProfile(uid) {
      this.$router.push({
        path: "/profile/list/message",
        query: {
          uid: uid
        }
      });
    },
    //获取帖子其他信息
    getPostMsg() {
      findById({ id: this.$route.params.id }).then(res => {
        if (res.code == 0) {
          this.title = res.data[0].title;
        }
      });
    },
    //请求更多回复
    moreReply(index) {
      findPage({
        commentId: index,
        page:
          this.bbsReplyData[index].replies.length / this.pageData.replySize + 1,
        size: this.pageData.replySize
      }).then(res => {
        this.bbsReplyData[index].replies.push(...res.data);
      });
    },
    //请求回帖
    getPageData() {
      CommentfindPage(this.pageData).then(res => {
        this.bbsReplyData = {};
        this.pageData.totalCount = res.count;
        for (let item of res.data) {
          this.$set(this.bbsReplyData, item.tieziCommentId, item);
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //跳页
    handleCurrentChange(val) {
      // this.pageData.commentPage = val;
      this.getPageData();
    },
    //路由返回
    routerBack() {
      this.$router.back(-1);
    },
    //==========上传文件方法========
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
    //==========上传文件方法========
  }
};
</script>

<style scoped>
.bbs-title {
  font-weight: 700;
  font-size: 20px;
  margin: 10px 20px;
}
.floor-master-tag {
  position: absolute;
  margin-left: 10px;
  top: 25px;
}
.childrenList-item {
  position: relative;
}
.childrenList {
  position: relative;
  margin-left: 30px;
  padding: 20px;
  background: #f4faff;
  border-radius: 4px;
  margin-bottom: 10px;
}
.children-item-parentName,
.children-item-name {
  cursor: pointer;
  font-size: 15px;
  color: #535353;
  font-weight: 700;
  cursor: pointer;
}

.item-public-span {
  color: #464646;
  font-size: 14px;
}
.load-more-a {
  cursor: pointer;
  font-size: 14px;
  color: #82c0ff;
  line-height: 30px;
}
.item-reply-a {
  cursor: pointer;
  font-size: 14px;
  color: #82c0ff;
  margin: 10px;
  line-height: 30px;
}
.load-more-a:hover,
.item-reply-a:hover {
  color: #409eff;
}
.user-name {
  cursor: pointer;
  font-size: 15px;
  color: #535353;
  font-weight: 700;
  position: absolute;
  margin-left: 10px;
  top: 0px;
}
.pop-up-btn-bar {
  padding-bottom: 10px;
}
.header-msg {
  border-top: 1px solid #f0f2f7;
  padding-top: 5px;
}
.item-headimg {
  cursor: pointer;
}
.children-item-content,
.item-content {
  line-height: 26px;
  font-size: 16px;
  word-wrap: break-word;
  text-align: justify;
  overflow: hidden;
  margin-top: 5px;
}
.list-item {
  position: relative;
  margin: 20px;
  border-bottom: 1px solid #f0f2f7;
}
.floor-tag {
  float: right;
}
.handlePage {
  margin: 10px;
}
.btn-bar {
  float: right;
  margin: 10px;
}
i {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}
i:hover {
  color: #409eff;
}
.el-icon-caret-top {
  position: absolute;
  top: -13px;
  font-size: 20px;
  color: #eaf6ff;
}
</style>