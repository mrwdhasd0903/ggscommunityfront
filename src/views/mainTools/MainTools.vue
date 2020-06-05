  <!-- 工具-->
<template>
  <el-collapse class="main-tools" accordion>
    <el-collapse-item>
      <template slot="title">
        日历工具
        <i class="header-icon el-icon-date"></i>
      </template>
      <el-calendar class="tool" v-model="value"></el-calendar>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        课表查询
        <i class="header-icon el-icon-s-order"></i>
      </template>
      <el-calendar class="tool" v-model="value"></el-calendar>
    </el-collapse-item>

    <el-collapse-item>
      <template slot="title">
        成绩查询
        <i class="header-icon el-icon-circle-check"></i>
      </template>
      <el-form
        class="score-query-from"
        :inline="true"
        ref="stuData"
        :rules="rules"
        :model="stuData"
      >
        <el-form-item label="学号" prop="u">
          <el-input type="text" v-model="stuData.u" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="p">
          <el-input type="password" v-model="stuData.p" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('stuData')">>查询</el-button>
        </el-form-item>
      </el-form>
      <div class="score-html" v-html="scoreHtml"></div>
    </el-collapse-item>

    <el-collapse-item>
      <template slot="title">
        其他东西
        <i class="header-icon el-icon-s-promotion"></i>
      </template>
      <el-calendar class="tool" v-model="value"></el-calendar>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { getScore } from "network/tools";
export default {
  name: "MainTools",
  components: {},
  data() {
    return {
      //日期
      value: new Date(),
      //课表html
      scoreHtml: "",
      //成绩查询参数
      stuData: {
        u: "",
        p: ""
      },
      //表单验证
      rules: {
        u: { required: true, message: "请输入学号", trigger: "blur" },
        p: { required: true, message: "请输入密码", trigger: "blur" }
      }
    };
  },
  computed: {},
  methods: {
    //表格外套
    tableAuto() {
      var lables = document.querySelectorAll(".gridtable");

      lables.forEach(function(lable, index) {
        var ele = document.createElement("div");
        ele.className = "table-div";
        lable.parentNode.replaceChild(ele, lable);
        ele.appendChild(lable);
      });
    },
    //查询
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          getScore(this.stuData).then(res => {
            if (res === 0) {
              this.$message.error("学号或密码不正确");
              return;
            }
            this.scoreHtml = res;
            setTimeout(() => {
              this.tableAuto();
            }, 100);
          });
        } else {
          console.log("error submit!!");
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.tool {
  margin: 20px;
}
</style>
<style>
.main-tools .el-collapse-item__header {
  padding: 0 30px;
  font-size: 15px;
}
.main-tools .header-icon {
  margin-left: 5px;
}
.score-query-from {
  padding-left: 20px;
}
.score-html .ajax_container {
  font-size: 20px;
}

.score-html thead {
  color: #606266;
  font-weight: 500;
}

/* ========成绩======== */
.table-div {
  width: 100%;
  overflow: auto;
}
.score-html th {
  background: #d2e8ff;
}
.score-html th,
.score-html tr,
.score-html td {
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  padding: 12px 0;
  transition: all 0.2s ease;
}
.score-html .gridtable:nth-child(1) th,
.score-html .gridtable:nth-child(1) tr,
.score-html .gridtable:nth-child(1) td {
  padding: 16px 16px;
}
.score-html tbody tr:nth-child(even) {
  background: #f5f9ff;
}
.score-html .gridtable {
  margin: 0 auto;
  padding: 20px;
}
.score-html tr:hover {
  background: #d5e6ff !important;
}
</style>