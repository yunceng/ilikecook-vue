<template>
  <div class="search">
    <div class="block">
    <!-- <h3>{{ menuName }}</h3> -->
    <el-row>
      <el-col :span="8" v-for="(item,index) in dataArr" :key="index">
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
    <!-- <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total='total'>
      </el-pagination>
    </div> -->
  </div>
  </div>
</template>

<script>
export default {
  name : 'search',
  data() {
    return {
      dataArr : []
    }
  },
  mounted() {
    this.dataArr = this.$route.params.id
    console.log(this.$route.params.id)
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


