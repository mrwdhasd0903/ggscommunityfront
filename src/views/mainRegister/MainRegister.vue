<template>
  <div class="register">
    <el-form
      label-position="left"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="手机号" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
          class="code-input"
          v-model="ruleForm.code"
          placeholder="点击右侧按钮获取验证码..."
          autocomplete="off"
        ></el-input>
        <el-button
          type="primary"
          @click="changeStatus"
          class="getcode-btn"
          :disabled="isDisabled"
          plain
        >{{getcodeBtntext}}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to="/login" class="login_a" tag="a">已有账号?登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MainRegister",
  components: {},
  data() {
    //表单验证
    var validateUsername = (rule, value, callback) => {
      if (
        value.replace(/(1[3|4|5|7|8]\d{9})(((\D{1}|$)[\s\S]*)+)/g, "") != ""
      ) {
        callback(new Error("请输入正确的手机号"));
      } else if (value === "") {
        callback(new Error("请输入手机号"));
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
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value != this.ruleForm.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入短信验证码"));
      } else {
        callback();
      }
    };
    return {
      //获取验证码按钮的状态
      setTime: 10,
      getcodeBtntext: "获取验证码",
      getcodeBtnStatus: 1,
      //提交的数据
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        code: ""
      },
      //验证绑定
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  computed: {
    //按钮是否可点击状态
    isDisabled() {
      return (
        this.getcodeBtnStatus == 2 ||
        this.ruleForm.username == "" ||
        this.ruleForm.username.replace(
          /(1[3|4|5|7|8]\d{9})(((\D{1}|$)[\s\S]*)+)/g,
          ""
        ) != ""
      );
    }
  },
  methods: {
    //改变验证码按钮的状态
    changeStatus() {
      if (this.getcodeBtnStatus === 1) {
        this.getcodeBtnStatus = 2;
        this.getcodeBtntext = "已发送" + this.setTime;
        var interval = setInterval(() => {
          this.setTime--;
          this.getcodeBtntext = "已发送" + this.setTime;
          if (this.setTime == 0) {
            clearInterval(interval);
            this.getcodeBtnStatus = 1;
            this.getcodeBtntext = "再次获取";
            this.setTime = 20;
          }
        }, 1000);
      }
    },
    //
    //提交按钮
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          // this.$router.push("/login");
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
.register {
  width: 600px;
  margin: 200px auto;
}

.code-input {
  width: calc(100% - 122px);
  margin-right: 10px;
}
.login_a {
  white-space: nowrap; /*强制span不换行*/
  display: inline-block;
  margin-left: 10px;
  font-size: 15px;
  color: rgb(112, 154, 245);
}
.login_a:hover {
  color: rgb(36, 36, 255);
}
@media screen and (max-width: 768px) {
  .register {
    width: 90%;
    margin: 150px auto;
  }
}
</style>