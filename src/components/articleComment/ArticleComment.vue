<template>
  <div class="comment">
    <div class="article-comment">
      <p v-if="commentIsNull" class="null-text">暂无评论,留下第一条评论~</p>
      <div class="comment-item" v-for="(item,index) in commentData" :key="'commentData'+index">
        <img :src="item.avatar" />
        <el-tag class="user-tag" size="mini" v-if="item.isAuthor=='1'">作者</el-tag>
        <span class="nickname">{{item.nickname}}</span>
        <span class="createTime">
          {{item.createTime}}
          <span @click="setPlaceholder(item.nickname)">回复</span>
        </span>
        <p class="content">{{item.content}}</p>
        <div class="reply-comment">
          <div
            class="comment-item"
            v-for="(replyItem,index) in item.replies"
            :key="'replyComments'+index"
          >
            <img :src="replyItem.avatar" />
            <el-tag class="user-tag" size="mini" v-if="replyItem.isAuthor=='1'">作者</el-tag>
            <span class="nickname-nickname">
              <span>{{replyItem.nickname}}</span>
              <span>@{{replyItem.repliedNickname}}</span>
              <!-- <span>@XXX</span> -->
            </span>
            <span class="createTime">
              {{replyItem.createTime}}
              <span @click="setPlaceholder(replyItem.nickname)">回复</span>
            </span>
            <p class="content">{{replyItem.content}}</p>
          </div>
          <span
            v-if="item.replyCount-item.replies.length>0"
            class="see-more"
            @click="moreReply(index)"
          >查看更多({{item.replyCount-item.replies.length}})</span>
        </div>
      </div>
    </div>
    <div class="comment-input">
      <el-input class="input" size="small" v-model="input" :placeholder="placeholder"></el-input>
      <el-button class="button" @click="cleanInput()" size="small">清空</el-button>
      <el-button class="button" size="small" type="primary" plain>回复</el-button>
    </div>
  </div>
</template>

<script>
import { findPage, replyFindPage } from "network/articleComment";
export default {
  name: "ArticleComment",
  components: {},
  data() {
    return {
      input: "",
      commentIsNull: false,
      placeholder: "评论文章...",
      articleUser: 82,
      pageData: {
        articleId: "",
        orderBy: 0,
        commentPage: 1,
        commentSize: 5,
        replyPage: 1,
        replySize: 2
      },
      commentData: {},
      commentList: [
        {
          id: 82,
          nickname: "小王",
          email: "2553378438@qq.com",
          content: "我是一级评论",
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
          createTime: "2020-04-06",
          replyComments: [
            {
              id: 83,
              nickname: "小王",
              email: "2553378438@qq.com",
              content: "我是二级评论",
              avatar:
                "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
              createTime: "2020-04-06",
              parentComment: {
                id: 82,
                nickname: "小王",
                email: "2553378438@qq.com",
                content: "我是一级评论",
                avatar:
                  "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
                createTime: "2020-04-06"
              }
            },
            {
              id: 82,
              nickname: "小王2号",
              email: "2553378438@qq.com",
              content: "我回复评论的评论 , 理解为三级评论",
              avatar:
                "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
              createTime: "2020-04-06",
              parentComment: {
                id: 83,
                nickname: "小王",
                email: "2553378438@qq.com",
                content: "我是二级评论",
                avatar:
                  "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
                createTime: "2020-04-06"
              }
            },
            {
              id: 85,
              nickname: "小王2号",
              email: "2553378438@qq.com",
              content: "我回复三级评论 , 理解为四级评论",
              avatar:
                "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
              createTime: "2020-04-06",
              parentComment: {
                id: 84,
                nickname: "小王2号",
                email: "2553378438@qq.com",
                content: "我回复评论的评论 , 理解为三级评论",
                avatar:
                  "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
                createTime: "2020-04-06"
              }
            },
            {
              id: 87,
              nickname: "小王3号",
              email: "2553378438@qq.com",
              content: "我回复四级评论 , 理解为五级评论",
              avatar:
                "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
              createTime: "2020-04-06",
              parentComment: {
                id: 85,
                nickname: "小王2号",
                email: "2553378438@qq.com",
                content: "我回复三级评论 , 理解为四级评论",
                avatar:
                  "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
                createTime: "2020-04-06"
              }
            }
          ]
        },
        {
          id: 83,
          nickname: "小王2",
          email: "2553378438@qq.com",
          content: "我是也是一级评论",
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
          createTime: "2020-04-06",
          replyComments: []
        },
        {
          id: 84,
          nickname: "小王2",
          email: "2553378438@qq.com",
          content: "我是也是一级评论",
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
          createTime: "2020-04-06",
          replyComments: []
        },
        {
          id: 85,
          nickname: "小王2",
          email: "2553378438@qq.com",
          content: "我是也是一级评论",
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
          createTime: "2020-04-06",
          replyComments: []
        },
        {
          id: 86,
          nickname: "小王2",
          email: "2553378438@qq.com",
          content: "我是也是一级评论",
          avatar:
            "http://47.113.92.137:8888/upload/io/img/2020/4/6/1586149620923.png",
          createTime: "2020-04-06",
          replyComments: []
        }
      ]
    };
  },
  activated() {},
  mounted() {
    this.pageData.articleId = this.$route.params.id;
    findPage(this.pageData).then(res => {
      if (res.count > 0) {
        for (let item of res.data) {
          this.$set(this.commentData, item.articleCommentId, item);
        }
      } else {
        this.commentIsNull = true;
      }
    });
  },
  methods: {
    //更多回复
    moreReply(index) {
      replyFindPage({
        commentId: index,
        page:
          this.commentData[index].replies.length / this.pageData.replySize + 1,
        size: this.pageData.replySize
      }).then(res => {
        this.commentData[index].replies.push(...res.data);
      });
    },
    //@回复
    setPlaceholder(nickname) {
      this.placeholder = "回复@" + nickname;
    },
    //清空
    cleanInput() {
      this.input = "";
      this.placeholder = "评论文章...";
    }
  }
};
</script>

<style scoped>
.null-text {
  line-height: 300px;
  text-align: center;
  font-size: 14px;
  color: #666666;
}
.input {
  width: calc(100% - 112px);
}
.button {
  margin: 0;
}
.article-comment {
  height: 528px;
  max-height: 528px;
  overflow: auto;
}
.user-tag {
  transform: translateY(-11px);
}
.nickname-nickname,
.nickname {
  position: absolute;
  font-size: 14px;
  color: #666666;
  margin-left: 5px;
  font-weight: 700;
}
.nickname-nickname > span:nth-child(2) {
  color: #409eff;
}
.createTime {
  float: right;
  font-size: 14px;
  color: #666666;
}
.see-more {
  font-size: 14px;
}

.see-more,
.createTime > span {
  color: #71b8ff;
  cursor: pointer;
}
.see-more:hover,
.createTime > span:hover {
  color: #409eff;
}
.content {
  font-size: 15px;
  color: #353535;
  padding-left: 12px;
}
.article-comment > .comment-item > .content {
  margin-left: 13px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.comment-item {
  position: relative;
  padding: 20px;
}
.reply-comment > .comment-item {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 13px;
}
.comment-item img {
  width: 25px;
}
@media screen and (max-width: 425px) {
  .comment-item {
    padding: 10px;
  }
}
</style>