<template>
    <div class="register">
      <el-row>
        <el-col :span="24">
          <p class="register-text">注册一个新的账号</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form ref="formReginster" :model="formReginster" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="formReginster.username"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="formReginster.nickname"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formReginster.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formReginster.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="repetPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="checkedRegister">我已阅读并同意《厨房里注册使用协议》</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button @click="register()">注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name : 'register',
    data() {
        return {
            formReginster : {
                username : '',
                nickname: '',
                email: '',
                password : '',
            },

            repetPassword : '',
            checkedRegister : true
        }
    },
    methods : {
      register() {
        let email = this.formReginster.email;
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(this.formReginster.username == '') {
          this.$message.error('用户名不能为空哦～');
        }else if(this.formReginster.nickname == '') {
          this.$message.error('请输入昵称～');
        }else if(!reg.test(email)) {
          this.$message.error('请输入正确的邮箱～')
        }else if(this.formReginster.password == '') {
          this.$message.error('请输入密码～')
        }else if(this.repetPassword == '' || this.formReginster.password != this.repetPassword) {
          this.$message.error('请确认密码～')
        }else{
          let paramsObj = {
            username : this.formReginster.username,
            nickname : this.formReginster.nickname,
            email : this.formReginster.email,
            password : this.formReginster.password
          }
          // let data = JSON.stringify(paramsObj)
          // let headers = {
          //              'Content-Type': 'application/x-www-form-urlencoded'
          //             }
          // console.log(typeof data)
          // this.$message('ok')
          // this.$axios.post(`/api/register.do`,paramsObj).then((res) => {
          //   if(res.status == 200 && res.data.code == 0) {
          //     console.log(res.data,'register')
          //   }
          // }).catch((err) => {

          // })
          this.$axios({
          method:'post',
          url:'/api/register.do',
          data: this.qs.stringify(paramsObj)
        }).then((res) =>{
          if(res.data.code == 0){
            console.log('regiiiiiii')
            this.$message({
              message: '恭喜你，注册成功，赶紧登录吧～',
              type: 'success'
            });
            this.$router.push('/login')
          }
          console.log(res.data)
        }).catch((err) =>{
          console.log(err)
        })
        }
      }
    },

}
</script>
<style scoped>
.register {
  min-height: 350px;
  width: 40%;
  margin: 100px auto;
}
.register-text {
  margin-bottom: 20px;
  font-size: 18px;
}
.el-button {
  width: 196px;
}
</style>


