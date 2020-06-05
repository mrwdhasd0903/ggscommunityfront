<!-- 首页编写文章板块 -->
<template>
  <div class="wtarticle">
    <el-image
      fit="cover"
      @click.native="addCover"
      @error="coverLoad(false)"
      @load="coverLoad(true)"
      :src="article.coverSrc"
    >
      <div slot="error" class="article-cover">
        <i class="el-icon-circle-plus-outline">
          添加文章封面
          <p>出现上传空白请尝试拉动截图框</p>
        </i>
      </div>
    </el-image>
    <div class="wtarticle-title">
      <input placeholder="在这里输入标题" v-model="article.title" type="text" />
    </div>
    <el-select
      :multiple-limit="6"
      class="tagSelect"
      v-model="article.tagList"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="可最多添加6个标签"
    >
      <el-option
        v-for="item in tagList"
        :key="'tagList'+item.id"
        :label="item.name"
        :value="item.id"
      ></el-option>
    </el-select>
    <el-dropdown class="typeSelect">
      <el-button class="el-icon-arrow-down">{{currTypeName||'选择分类'}}</el-button>
      <el-dropdown-menu slot="dropdown" class="dropdown">
        <el-dropdown-item
          v-for="(item,index) in typeList"
          @click.native="setType(item)"
          :key="'typeList'+index"
        >{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-button @click="articlePost" class="postBtn" type="primary" plain>提交</el-button>
    <div class="del-cover el-icon-delete" @click="delCover" v-if="delSwitch">删除封面</div>
    <div class="articleEditortitle"></div>
    <div class="articleEditor">
      <mavon-editor style="z-index: 9999 !important;" v-model="article.content"></mavon-editor>
    </div>
  </div>
</template>

<script>
import screenshots from "utlis/screenshots";
import { dataURLtoFile } from "utlis/dataURLtoFile";
import { uploadOss } from "network/upload";

export default {
  name: "MajorWtarticle",
  components: {},
  data() {
    return {
      tagList: [
        { id: "1001", name: "HTML" },
        { id: "1002", name: "CSS" },
        { id: "1003", name: "JavaScript" }
      ],
      delSwitch: false,
      typeList: [
        { name: "分类一", id: "1001" },
        { name: "分类二", id: "1002" },
        { name: "分类三", id: "1004" },
        { name: "分类四", id: "1005" },
        { name: "分类五", id: "1006" },
        { name: "分类六", id: "1007" }
      ],
      currTypeName: "",
      article: {
        content: "",
        title: "",
        coverSrc: "",
        typeId: "",
        tagList: []
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    //选择分类
    setType(type) {
      this.article.typeId = type.id;
      this.currTypeName = type.name;
    },
    //删除封面
    delCover() {
      this.article.coverSrc = "";
    },
    //显示删除按钮
    coverLoad(flag) {
      this.delSwitch = flag;
    },
    //提交
    articlePost() {
      console.log(this.article);
    },
    //截图封面上传
    addCover() {
      screenshots.uploadImg(
        "截取封面",
        "#fff",
        1000 / 466,
        20,
        "#409EFF",
        () => {
          this.article.coverSrc = screenshots.getNewImg().cloneNode(true).src;
          var formData = new FormData();
          formData.append(
            "file",
            dataURLtoFile(this.article.coverSrc, "articleCover.jpg")
          );
          console.log(dataURLtoFile(this.article.coverSrc, "articleCover"));
          formData.append("folder", "image");
          uploadOss(formData).then(res => {
            if (res.code == 0) {
              this.article.coverSrc = res.data[0].url;
              this.$message({
                showClose: true,
                message: "已上传",
                type: "success",
                center: true,
                offset: 100
              });
            } else {
              this.$message.error({
                showClose: true,
                message: "上传失败,请重新上传",
                center: true,
                offset: 100
              });
            }
          });
        }
      );
    }
  }
};
</script>
<style>
.el-select-dropdown {
  z-index: 9999 !important;
}
</style>
<style scoped>
.dropdown {
  z-index: 9999 !important;
}
.tagSelect,
.typeSelect,
.postBtn {
  margin: 10px 0 10px 30px;
}
.wtarticle-title input {
  height: 30px;
  font-size: 25px;
  border-bottom: 2px solid #444;
  width: 100%;
  font-weight: 700;
  outline: none;
}
.wtarticle-title {
  padding: 10px;
}
.wtarticle {
  position: relative;
}
.del-cover {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  opacity: 0;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.del-cover:hover {
  opacity: 1;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.4);
}
.articleEditor {
  min-width: 100%;
  min-height: 600px;
}
.articleEditortitle {
  box-shadow: 0 1px 0px rgba(26, 26, 26, 0.1);
  position: sticky;
  background: #fff;
  top: 0;
  z-index: 10002;
}
p {
  font-size: 12px;
  margin-top: 8px;
}
i {
  display: block;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen {
  .del-cover {
    opacity: 1;
  }
}
</style>
<style>
.w-e-toolbar .w-e-menu {
  padding: 5px 8px;
}
.wtarticle .el-image {
  width: 100%;
  border-radius: 2px;
  color: #a3a3a3;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}
.wtarticle .el-image:hover + .del-cover {
  opacity: 1;
}
.wtarticle .el-image:hover {
  background: #eee;
  color: #409eff;
}
.wtarticle .article-cover {
  position: relative;
  height: 200px;
  width: 100%;
}
</style>