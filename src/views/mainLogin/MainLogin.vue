<template>
  <div class="login">
    <el-form
      label-position="left"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号/手机号" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
          class="code-input"
          v-model="ruleForm.code"
          placeholder="输入右侧验证码..."
          autocomplete="off"
        ></el-input>
        <span class="checkCode" id="checkCode"></span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to="/register" class="register_a" tag="a">注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getuserdata, test } from "network/user";
import { setCookie, getCookie } from "utlis/cookie";
import getGVerify from "utlis/checkCode";
export default {
  data() {
    //校验
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!this.varverifyCode.validate(value)) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      varverifyCode: null,
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      //校验绑定
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  mounted() {
    //生成验证码
    this.varverifyCode = getGVerify("checkCode");
  },
  activated() {
    //清除登陆信息
    setCookie("headimg", "", 10);
    setCookie("nickname", "", 10);
    window.localStorage.setItem("memberId", "");
    window.localStorage.setItem("token", "");
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          //登录设置cookie
          login(this.ruleForm).then(res => {
            if (res.code == 0) {
              window.localStorage.setItem("token", res.data[0].token);
              window.localStorage.setItem("memberId", res.data[0].id);
              setCookie("headimg", res.data[0].avatar, 10);
              setCookie("nickname", res.data[0].nickname, 10);
              this.$router.push("/");
              // return getuserdata();
            } else if (res.code == 1) {
              this.$message({
                showClose: true,
                message: res.message,
                center: true,
                type: "warning",
                offset: 100
              });
            }
          });
          // .then(res => {
          //   setCookie("headimg", res.data.headimg,10);
          //   this.$router.push("/");
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login {
  width: 600px;
  margin: 200px auto;
}
.register_a {
  margin-left: 10px;
  font-size: 15px;
  color: rgb(131, 170, 255);
}
.register_a:hover {
  color: rgb(36, 36, 255);
}
.code-input {
  margin-right: 15px;
  width: calc(100% - 115px);
}
.checkCode {
  position: absolute;
  top: 3px;
}
@media screen and (max-width: 768px) {
  .login {
    width: 90%;
    margin: 150px auto;
  }
}
</style>