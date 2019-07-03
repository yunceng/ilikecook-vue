<template>
  <div class="block">
    <h3>{{ menuName }}</h3>
    <el-row>
      <el-col :span="8" v-for="(item,index) in menuArr" :key="index">
        <el-row>
          <el-col :span="12">
            <div class="img">
              <img :src="'/api' + item.cover_img" alt="">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="text">
              <h4>{{ item.name }}</h4>
              <p>{{ item.foods }}</p>
              <p class="time-p">{{ item.createTime }}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total='total'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name : 'health',
  data() {
    return {
        menuName : '家常菜',
        menuArr : [],
        total : 0,
        currentPage1 : 1,
        pageSize : 8

    }
  },
  methods : {
    handleSizeChange(val) {
      this.getData(this.$route.params.id,this.currentPage1,val)
    },
    handleCurrentChange(val) {
      this.getData(this.$route.params.id,val,this.pageSize)
    },
    // get data
    getData(id,pageNo,pageSize) {
      this.$axios.get(`/api/m/getMenuByCategory.do?category=${id}&pageNo=${pageNo}&pageSize=${pageSize}`).then((res) => {
        if(res.status == 200 && res.data.code == 0) {
          console.log(res.data.data.data,'menu')
          this.menuArr = res.data.data.data
          this.total = res.data.data.count
          this.currentPage1 = res.data.data.currentPage
          this.pageSize = res.data.data.pageSize
        }
      }).catch((error) => {

      })
    }
  },
  mounted() {
    // console.log(this.$route.params.id,'zxy')
    this.getData(this.$route.params.id,this.currentPage1,this.pageSize)
    console.log(99)
  }
}
</script>

<style scoped>
.block {
  padding: 0 120px;
  min-height: 550px;
}
h3 {
  color: red;
  text-align: left;
  /* border-bottom: 1px solid #ccc; */
  padding: 0 0 5px 0 ;
}
h4 {
  text-align: left;
  padding: 0;
  margin: 0 10px;
}
h4:hover {
  cursor: pointer;
}
.img>img{
  width: 100%;
  height: 150px;
}
p {
  text-align: left;
  margin: 0 10px;
  color: #999;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.time-p {
  font-size: 14px;
}
</style>


