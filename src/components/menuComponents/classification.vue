<template>
  <div class="classification">
    <div class="blockDiv">
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">

          <el-tab-pane label="本周最受欢迎" name="first">
            <el-row>
              <el-col :span="6" v-for="(item,index) in hotWeekArr" :key="index">
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
            </el-row>

            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="pageSize1"
                layout="total, prev, pager, next"
                :total='total1'>
              </el-pagination>
            </div>
          </el-tab-pane>

          <el-tab-pane label="月季最佳" name="sencond">
            <el-row>
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
            </el-row>

            <div class="block">
              <el-pagination
                @size-change="handleSizeChange2"
                @current-change="handleCurrentChange2"
                :current-page.sync="currentPage2"
                :page-size="pageSize2"
                layout="total, prev, pager, next"
                :total='total2'>
              </el-pagination>
            </div>

          </el-tab-pane>
          <el-tab-pane label="最新创建" name="third">
            <el-row>
              <el-col :span="6" v-for="(item,index) in newCreatedArr" :key="index">
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
            </el-row>

            <div class="block">
              <el-pagination
                @size-change="handleSizeChange3"
                @current-change="handleCurrentChange3"
                :current-page.sync="currentPage3"
                :page-size="pageSize3"
                layout="total, prev, pager, next"
                :total='total3'>
              </el-pagination>
            </div>

          </el-tab-pane>
          <el-tab-pane label="流行菜单" name="four">
            <el-row>
              <el-col :span="6" v-for="(item,index) in popularArr" :key="index">
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
            </el-row>

            <div class="block">
              <el-pagination
                @size-change="handleSizeChange4"
                @current-change="handleCurrentChange4"
                :current-page.sync="currentPage4"
                :page-size="pageSize4"
                layout="total, prev, pager, next"
                :total='total4'>
              </el-pagination>
            </div>

          </el-tab-pane>
          <el-tab-pane label="推荐菜单" name="five">
            <el-row>
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
            </el-row>

            <!-- <div class="block">
              <el-pagination
                @size-change="handleSizeChange5"
                @current-change="handleCurrentChange5"
                :current-page.sync="currentPage5"
                :page-size="pageSize5"
                layout="total, prev, pager, next"
                :total='total5'>
              </el-pagination>
            </div> -->

          </el-tab-pane>
        </el-tabs>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name : 'classification',
  data() {
    return {
      activeName : 'first',
      hotWeekArr : [],  // 本周最受欢迎
      monthBestArr : [],  // 月季最佳
      newCreatedArr : [], // 最新创建
      popularArr : [], // 流行菜单
      recommendedArr : [], // 推荐菜单
      currentPage1 : 1,
      pageSize1 : 8,
      total1 : 0,
      currentPage2 : 1,  // 2 el-pane
      pageSize2 : 8,
      total2 : 0,
      currentPage3 : 1,  // 3 el-pane
      pageSize3 : 8,
      total3 : 0,
      currentPage4 : 1,  // 4 el-pane
      pageSize4 : 8,
      total4 : 0,
      currentPage5 : 1,  // 5 el-pane
      pageSize5 : 8,
      total5 : 0,

    }
  },
  methods : {
    handleClick() {

    },
    // 本周
    handleSizeChange(val) {
      this.hotWeek(this.currentPage1,val)
    },
    handleCurrentChange(val) {
      this.hotWeek(val,this.pageSize1)
    },
    // 本月
    handleSizeChange2(val) {
      this.monthBest(this.currentPage2,val)
    },
    handleCurrentChange2(val) {
      this.monthBest(val,this.pageSize2)
    },
    // 最新创建
    handleSizeChange3(val) {
      this.newCreated(this.currentPage3,val)
    },
    handleCurrentChange3(val) {
      this.newCreated(val,this.pageSize3)
    },
    // 流行菜单
    handleSizeChange4(val) {
      this.popular(this.currentPage4,val)
    },
    handleCurrentChange4(val) {
      this.popular(val,this.pageSize4)
    },

    // 本周最受欢迎
    hotWeek(pageNo,pageSize) {
      this.$axios.get(`/api/m/getCurrentWeekPopular.do?pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.total1 = res.data.data.count  // 总条数
          this.currentPage1 = res.data.data.currentPage  // 当前页
          this.pageSize1 = res.data.data.pageSize   // 数据条数
          this.hotWeekArr = res.data.data.data
        }
      }).catch((err) => {

      })
    },
    // 月季最佳
    monthBest(pageNo,pageSize) {
      this.$axios.get(`/api/m/getLastMonthPopular.do?pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.total2 = res.data.data.count  // 总条数
          this.currentPage2 = res.data.data.currentPage  // 当前页
          this.pageSize2 = res.data.data.pageSize   // 数据条数
          this.monthBestArr = res.data.data.data
        }
      }).catch((err) => {

      })
    },
    // 最新创建
    newCreated(pageNo,pageSize) {
      this.$axios.get(`/api/m/getLastCreate.do?pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.total3 = res.data.data.count  // 总条数
          this.currentPage3 = res.data.data.currentPage  // 当前页
          this.pageSize3 = res.data.data.pageSize   // 数据条数
          this.newCreatedArr = res.data.data.data
        }
      }).catch((err) => {

      })
    },
    // 流行菜单
    popular(pageNo,pageSize) {
      this.$axios.get(`/api/m/getPopularMenu.do?pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          this.total4 = res.data.data.count  // 总条数
          this.currentPage4 = res.data.data.currentPage  // 当前页
          this.pageSize4 = res.data.data.pageSize   // 数据条数
          this.popularArr = res.data.data.data
        }
      }).catch((err) => {

      })
    },
    recommended(pageNo,pageSize) {
      this.$axios.get(`/api/m/getRecommendMenus.do`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          // this.total5 = res.data.data.count  // 总条数
          // this.currentPage5 = res.data.data.currentPage  // 当前页
          // this.pageSize5 = res.data.data.pageSize   // 数据条数
          this.recommendedArr = res.data.data
        }
      }).catch((err) => {

      })
    }
  },
  mounted() {
    this.hotWeek(this.currentPage1,this.pageSize1)
    this.monthBest(this.currentPage2,this.pageSize2)
    this.newCreated(this.currentPage3,this.pageSize3)
    this.popular(this.currentPage4,this.pageSize4)
    this.recommended()
  }
}
</script>

<style scoped>

.blockDiv {
  padding: 10px 120px;
  min-height: 550px;
}
h3 {
  color: red;
  text-align: left;
  /* border-bottom: 1px solid #ccc; */
  padding: 0 0 5px 0 ;
}
p {
  /* height: 35px; */
  /* line-height: 35px; */
  padding: 10px 0;
}
p:hover {
  background: #ccc;
  cursor: pointer;
}
/*=====kapian=====*/
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

  .image {
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


