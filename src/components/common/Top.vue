<template>
  <div class="top">
    <el-row>
      <el-col :span="24">
          </el-col>
          <el-col :span="6">
            <h1><img src="static/img/logo1.png" alt=""></h1>
          </el-col>
          <el-col :span="6">
            <div class="search">
              <!-- <el-input placeholder="请输入内容" v-model="inputValue">
                <el-button type="danger" slot="append" icon="el-icon-search"></el-button>
              </el-input> -->
              <el-autocomplete
                class="inline-input"
                v-model="inputValue"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
              >
              <el-button type="danger" slot="append" icon="el-icon-search" @click="searchMenu"></el-button>
              </el-autocomplete>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="menu">
            <ul class="Recently-search one">
              <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/menu">菜谱分类</router-link></li>
                <li><router-link to="/classification">菜单</router-link></li>
                <!-- <li><router-link to="/select">健康饮食</router-link></li> -->
                <li><router-link to="/myWorks">个人中心</router-link></li>
            </ul>
            </div>
            <!-- <ul class="Recently-search" v-show="Recently != ''">
              <li v-for="(item,idx) in restaurants" :key="idx"></li>
            </ul> -->
          </el-col>
          <el-col :span="6">
            <div class="login">
              <router-link to="/login">登录</router-link>
              <router-link to="/register">注册</router-link>
              <!-- <span @click="loginMethod()">登录</span>
              <span @click="registerMethod()">注册</span> -->
            </div>
          </el-col>

        </el-row>
        <!-- 导航 -->
        <el-row>

        </el-row>
  </div>
</template>

<script>
export default {
  name : 'top',
  data() {
    return {
      inputValue : '',
      Recently : '',
      restaurants : [
        { "value": "三全鲜食" },
        { "value": "鱼香肉丝" },
        { "value": "红烧茄子"},
        { "value": "烤鸡翅" },
        { "value": "油焖大虾" }
      ]
    }
  },
  methods : {
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
    },
    createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    },
    handleSelect(item) {
      console.log(item)
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）"}
      ]
    },
    // searchMenu
    searchMenu() {
      let word = this.inputValue
      let pageNo = 1
      let pageSize = 10
      this.$axios.get(`/api/m/getMenuByLikeWord.do?word=${word}&pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.restaurants.unshift({ 'value' : word })
          this.$router.push({ name : 'search',params : { id : res.data.data.data } })
          console.log(res.data.data.data,'search')
        }
      }).catch((err) => {

      })
    }
  },
  mounted() {
    // this.restaurants = this.loadAll();
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  text-align: left;
  list-style-type: none;
  padding: 0;
}
.top {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  /* background: red; */
}
.top h1 {
  height: 80px;
  padding: 0;
  margin: 0;
}
.top img {
  height: 70px;
}
.search {
  height: 80px;
  line-height: 80px;
}
.login {
  height: 80px;
  line-height: 80px;
  /* text-align: left; */
}
.login a {
  color: #CC4729;
  text-decoration: none;
}
.login span {
  color: #CC4729;
  margin-right: 5px;
  cursor: pointer;
}
/*======菜单======*/
.menu {
  width: 100%;
  height: 80px;
}
/*lunbo*/
.menu>ul {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.menu>ul>li {
  display: inline-block;
  margin: 0 0 0 15px;
  /* width: 25%; */
  height: 80px;
  line-height: 80px;
}
.menu>ul>li>a {
  display: block;
  text-decoration: none;
  /* color: rgb(255, 208, 75); */
  color: #CC4729;
  font-size: 16px;
  font-weight: bold;
}
</style>
