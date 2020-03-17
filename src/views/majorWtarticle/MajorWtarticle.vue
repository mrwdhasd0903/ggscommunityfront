<!-- 首页编写文章板块 -->
<template>
  <div class="wtarticle">
    <el-image
      fit="cover"
      @click.native="addCover"
      @error="coverLoad(false)"
      @load="coverLoad(true)"
      :src="coverSrc.src"
    >
      <div slot="error" class="article-cover">
        <i class="el-icon-circle-plus-outline">
          添加文章封面
          <p>出现上传空白请尝试拉动截图框</p>
        </i>
      </div>
    </el-image>
    <div class="wtarticle-title">
      <input placeholder="在这里输入标题" v-model="wtarticleTitle" type="text" />
    </div>
    <div class="del-cover el-icon-delete" @click="delCover" v-if="delSwitch">删除封面</div>
    <div class="articleEditortitle"></div>
    <div class="articleEditor" @click="editorClick"></div>
  </div>
</template>

<script>
import E from "wangeditor";
import screenshots from "utlis/screenshots.js";

const editor = new E(".articleEditortitle", ".articleEditor");
// 自定义菜单配置
editor.customConfig.menus = [
  "bold", // 粗体
  "fontSize", // 字号
  "fontName", // 字体
  "italic", // 斜体
  "underline", // 下划线
  "strikeThrough", // 删除线
  "foreColor", // 文字颜色
  "backColor", // 背景颜色
  "link", // 插入链接
  "list", // 列表
  "justify", // 对齐方式
  "quote", // 引用
  "emoticon", // 表情
  "image", // 插入图片
  "table", // 表格
  "video", // 插入视频
  "code", // 插入代码
  "undo", // 撤销
  "redo", // 重复
  "head" // 标题
];
export default {
  name: "MajorWtarticle",
  components: {},
  data() {
    return {
      delSwitch: false,
      coverSrc: "",
      wtarticleTitle: ""
    };
  },
  mounted() {
    editor.create();
  },
  computed: {},
  methods: {
    //删除封面
    delCover() {
      this.coverSrc = "";
    },
    //显示删除按钮
    coverLoad(flag) {
      this.delSwitch = flag;
    },
    //截图封面
    addCover() {
      screenshots.uploadImg(
        "截取封面",
        "#fff",
        1000 / 466,
        20,
        "#409EFF",
        () => {
          this.coverSrc = screenshots.getNewImg().cloneNode(true);
        }
      );
    },
    //点击空白处获得光标
    editorClick(event) {
      if (event.currentTarget == event.target) {
        editor.txt.append("");
      }
    }
  }
};
</script>

<style scoped>
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