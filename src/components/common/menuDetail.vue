<template>
  <div class="detail">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="24">
            <div class="container-main">
              <h3>{{ summaryInfo.name }}</h3>
              <div class="card-mine">
                <el-card :body-style="{ padding: '0px' }">
                <img :src="'/api' + summaryInfo.cover_img" class="image">
                <div style="padding: 14px;">
                  <span>{{ summaryInfo.name }}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ summaryInfo.createTime }}</time>
                    <el-button type="text" class="button">收藏</el-button>
                  </div>
                </div>
              </el-card>
              </div>

              <h4>用料</h4>
              <ul>
                <li v-for="(item,index) in menuFoodInfoList" :key="index">
                  <span>{{ item.name }}</span> / <span>{{ item.num }}</span>
                </li>
              </ul>
              <h4>{{ summaryInfo.name }}的做法</h4>
              <ul>
                <li v-for="(item,index) in menuStepInfoList" :key="index">
                  <span class="span-order">{{ item.order }}.</span><span>{{ item.desc }}</span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name : 'detail',
  data() {
    return {
      createTime : '',
      uuid : 0,
      menuFoodInfoList : [],
      menuStepInfoList : [],
      summaryInfo : {}
    }
  },
  methods : {
    getData(uuid) {
      this.$axios.get(`/api/m/getDetailMenuInfo.do?uuid=${uuid}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          console.log(res.data.data,'ccccccccc')
          this.summaryInfo = res.data.data.summaryInfo
          this.menuFoodInfoList = res.data.data.menuFoodInfoList
          this.menuStepInfoList = res.data.data.menuStepInfoList
        }
      }).catch((err) => {

      })
    }
  },
  mounted() {
    console.log(this.$route.params.id,'idddd')
    this.getData(this.$route.params.id)
  }
}
</script>

<style scoped>
.container-main {
  margin: 0 auto;
  width: 65%;
}
h3 {
  font-size: 20px;
}
h4 {
  text-align: left;
  margin: 0 0 0 15px;
  font-size: 20px;
  color: #BDAE83;
}
.describe {
  text-align: left;
  margin: 0 0 0 15px;
}
ul li {
  text-align: left;
  margin: 20px 30px;
  border-bottom: 1px dashed #ccc;
  font-size: 18px;
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

  .image {
    width: 100%;
    display: block;
    height: 350px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .card-mine {
    padding: 10px 20px;
  }
  .span-order {
    color: #BDAE83;
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
    margin-right: 15px;
  }
</style>


