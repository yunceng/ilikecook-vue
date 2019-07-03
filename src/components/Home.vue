<template>
  <div class="home">
    <!-- <top></top> -->
      <div class="container">
        <!-- 轮播 -->
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-carousel trigger="click" height="350px" indicator-position="outside">
                <el-carousel-item>
                  <h3><img src="../../static/img/banner1.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner2.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner3.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner4.jpg" alt=""></h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2>热门菜谱</h2>
          </el-col>
        </el-row>
        <el-row>
          <div class="block">
              <el-col :span="6" v-for="(item,index) in monthBestArr" :key="index">
                <el-card :body-style="{ padding: '5px' }">
                  <img :src="'/api' + item.cover_img" class="image" alt="">
                  <div style="padding: 14px;">
                    <router-link :to="'/classification/detail/' + item.uuid"><span>{{ item.name }}</span></router-link>
                    <div class="bottom clearfix">
                      <time class="time">{{ item.createTime }}</time>
                    </div>
                  </div>
                </el-card>
              </el-col>
          </div>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2>推荐菜谱</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-col :span="6" v-for="(item,index) in recommendedArr" :key="index">
                  <el-card :body-style="{ padding: '5px' }">
                    <img :src="'/api' + item.cover_img" class="image" alt="">
                    <div style="padding: 14px;">
                      <router-link :to="'/classification/detail/' + item.uuid"><span>{{ item.name }}</span></router-link>
                      <div class="bottom clearfix">
                        <time class="time">{{ item.createTime }}</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
            </div>
          </el-col>
        </el-row>
        <!-- footer -->
         <el-row>
          <el-col :span="24">
            <div class="text">
              <p>不再为吃什么而烦恼</p>
              <p>不再错失美味</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <login-con></login-con> -->
      <!-- 登录弹框 -->

  </div>
</template>
<script>
export default {
  name: "home",
  // components: { Top },
  data() {
    return {
      inputValue: "",
      Recently: "",
      RecentlyArr: [],
      dialogVisibleLogin: false,
      dialogVisibleReginster : false,
      activeIndex2 : '1',
      monthBestArr : [],
      recommendedArr : []
    };
  },
  mounted() {
    this.monthBest(1,8)
    this.recommended(1,8)
  },
  methods: {
    loginMethod() {
      this.dialogVisibleLogin = true;
    },
    registerMethod() {
      this.dialogVisibleReginster = true
    },
    handleClose() {
      this.dialogVisibleLogin = false;
      this.dialogVisibleReginster = false;
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    // 热门推荐
    monthBest(pageNo,pageSize) {
      this.$axios.get(`/api/m/getLastMonthPopular.do?pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.monthBestArr = res.data.data.data
        }
      }).catch((err) => {

      })
    },
    // 推荐
    recommended(pageNo,pageSize) {
      this.$axios.get(`/api/m/getRecommendMenus.do`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.recommendedArr = res.data.data
        }
      }).catch((err) => {

      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dialog__body {
  height: 350px !important;
}
/* .container {
  padding: 0 120px;
} */
.block {
  padding: 0 120px;
}
.block img {
  width: 100%;
  height: 350px;
}
h2 {
  color: rgb(255, 208, 75);
}
.block-ul {
  padding: 0 10px;
}
.block-ul img {
  width: 100%;
  height: 250px;
}
.block-ul h3 {
  padding: 0;
  margin: 0;
}
.block-ul span {
  display: inline-block;
  text-align: center;
}

.text {
  margin: 30px auto;
  padding: 5px 0;
  width: 60%;
  background: rgb(255, 208, 75);
}
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  img.image {
    width: 100%;
    display: block;
    height: 260px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  a:-webkit-any-link {
  color: #000;
  text-decoration: none;
}
</style>
