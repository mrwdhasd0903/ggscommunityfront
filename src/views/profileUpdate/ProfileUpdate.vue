<!-- 修改个人信息 -->
<template>
  <div class="profile-update">
    <el-form :rules="rules" label-width="80px" :model="form">
      <el-form-item label="修改头像">
        <el-button size="small" @click="uploadHeaderimg" type="primary">上传</el-button>
        <el-button size="small" @click="getHeaderimg" type="success">预览</el-button>
      </el-form-item>
      <el-form-item label="修改封面">
        <el-button size="small" @click="uploadCover" type="primary">上传</el-button>
        <el-button size="small" @click="getCover" type="success">预览</el-button>
        <el-tooltip class="item"  content="出现预览空白情况,请重新操作并尝试拖动截图框" placement="bottom">
          <i class="warning el-icon-warning-outline"></i>
        </el-tooltip>
      </el-form-item>
      <el-form-item prop="headername" label="昵称">
        <el-input v-model="form.headername"></el-input>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="form.personality"></el-input>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input v-model="form.introduce"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="选择性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
          <el-option label="保密" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="exit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import screenshots from "utlis/screenshots.js";
const newImg = new Image();
export default {
  name: "ProfileUpdate",
  components: {},
  data() {
    return {
      cover: "",
      headerimg: "",
      form: {
        gender: "1",
        headername: "蚉螡斔螤",
        personality: "天有多高我有多骚",
        introduce: "计算机系的一位靓仔"
      },
      rules: {
        headername: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    exit() {
      window.location.replace("/profile");
    },
    onSubmit() {
      console.log(this.form);
    },
    uploadCover() {
      screenshots.uploadImg(
        "截取封面",
        "#fff",
        1000 / 466,
        20,
        "#409EFF",
        () => {
          this.cover = screenshots.getNewImg().cloneNode(true);
        }
      );
    },
    uploadHeaderimg() {
      screenshots.uploadImg("截取头像", "#fff", 1, 20, "#409EFF", () => {
        this.Headerimg = screenshots.getNewImg().cloneNode(true);
      });
    },
    getHeaderimg() {
      if (this.Headerimg) {
        document
          .getElementsByClassName("header-img")[0]
          .getElementsByTagName("img")[0].src = this.Headerimg.src;
      }
    },
    getCover() {
      if (this.cover.src) {
        document.getElementsByClassName("header-bar")[0].style.backgroundImage =
          "url(" + this.cover.src + ")";
      }
    }
  }
};
</script>
<style scoped>
.profile-update {
  padding: 20px;
}
.warning {
  margin-left: 10px;
  font-size: 15px;
}
</style>
