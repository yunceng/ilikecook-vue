<template>
    <div class="login">
      <el-row>
        <el-col :span="24">
          <p class="login-text">经常登录的同志是好同志</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form ref="formLogin" :model="formLogin" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="formLogin.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLogin.password"></el-input>
            </el-form-item>
            <el-form-item label="记住密码">
              <el-checkbox v-model="formLogin.remember"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checkedLogin">我已阅读并同意《厨房里注册使用协议》</el-checkbox>
              <!-- <span>没有账号，去注册</span> -->
            </el-form-item>
            <el-form-item>
              <el-button v-on:click="submitLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name : 'login',
    data() {
        return {
            formLogin: {
                username : '',
                password : '',
                remember: ''
            },
            checkedLogin : true,
        }
    },
    methods:{
      submitLogin(){
        this.$axios({
          method:'post',
          url:'/api/login.do',
          data: this.qs.stringify({    //这里是发送给后台的数据
            username: this.formLogin.username,
            password: this.formLogin.password,
            remember: this.formLogin.remember
          })
        }).then((response) =>{          //这里使用了ES6的语法
          if(response.data.code == 0){
            localStorage.setItem("JSESSIONID", response.headers["authorization"]);
            this.$router.push("/home");
          }
          console.log(response)       //请求成功返回的数据
        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
      }
    }
}
</script>
<style scoped>
.login {
  min-height: 350px;
  width: 40%;
  margin: 100px auto;
}
.login-text {
  margin-bottom: 20px;
  font-size: 18px;
}
.el-button {
  width: 196px;
}
</style>
