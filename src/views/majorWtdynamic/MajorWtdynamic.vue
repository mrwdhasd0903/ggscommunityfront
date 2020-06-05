<!--首页发表动态板块-->
<template>
  <div class="MajorWtdynamic">
    <p>
      <el-button type="primary" size="mini" plain>发布</el-button>
    </p>
    <el-input
      type="textarea"
      placeholder="...此刻的心情"
      v-model="textarea"
      maxlength="500"
      show-word-limit
    ></el-input>
    <div class="upload">
      <el-upload
        class="upload-el-upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-change="onChange"
        :limit="9"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "MajorWtdynamic",
  components: {},
  data() {
    return {
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  computed: {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      document.getElementsByClassName(
        "el-upload--picture-card"
      )[0].style.display = "";
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onChange(file, fileList) {
      let len = fileList.length;
      if (len >= 2) {
        document.getElementsByClassName(
          "el-upload--picture-card"
        )[0].style.display = "none";
      } else {
        document.getElementsByClassName(
          "el-upload--picture-card"
        )[0].style.display = "";
      }
    }
  }
};
</script>
<style scoped>
p {
  line-height: 50px;
  text-align: right;
  padding-right: 15px;
}
</style>
<style>
.MajorWtdynamic .el-textarea__inner {
  height: 200px;
}
.upload {
  margin: 20px;
  max-width: 461px;
}
.MajorWtdynamic .el-upload-list__item-status-label {
  background-color: #409eff;
}
@media screen and (max-width: 425px) {
  .upload {
    margin: 10px;
    max-width: 325;
  }
  .MajorWtdynamic .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
  .MajorWtdynamic .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
}
</style>