<template>
  <div class="menuall">
    <div class="block">
      <el-row>
        <el-col>
          <h3>分类浏览</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(bigItem, index) in MenuArr" :label="bigItem.name" :name="index == 0 ? 'first' : ''" :key="index">
            <el-row>
              <el-col :span="8" v-for="(smallItem,idx) in bigItem.smallFoodClassificationInfos" :key="idx">
                <h4>{{ smallItem.name }}</h4>
                <ul>
                  <li v-for="(innerItem,indexInner) in smallItem.tinyFoodClassificationInfos" :key="indexInner"><router-link :to="'/menuClassDetail/' + innerItem.category"><span>{{ innerItem.name }}</span></router-link></li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        </el-col>
      </el-row>
    <el-row>
    </el-row>
    <el-row>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'menuAll',
  data() {
    return {
      activeName : 'first',
      MenuArr : []  // 菜谱
    }
  },
  mounted() {
    this.$axios.get(`/api/f/getClassification.do`).then((res) => {
      if(res.status == 200 && res.data.code == 0) {
        console.log(res.data.data)
        this.MenuArr = res.data.data
      }
    }).catch((err) => {

    })
  },
  methods : {
    handleClick() {

    }
  }
}
</script>

<style scoped>

.block {
  padding: 0 120px;
  min-height: 550px;
}
h3 {
  color: #CC4729;
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
h4 {
  color: #909090;
}
ul {
  width: 100%;
  min-height: 300px;
  text-align: left;
  background: #F5F6F5;
}
li {
  /* width: 25%; */
  display: inline-block;
  margin: 5px;
  text-align: left;
}
li:hover {
  color:  #589DF8;
  cursor: pointer;
}
a:-webkit-any-link {
  color: #000;
  text-decoration: none;
}
</style>


