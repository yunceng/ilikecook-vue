<template>
  <div class="myworks">
    <el-row>
      <el-col>
        <h3>用户 {{ userName }} 的厨房</h3>
      </el-col>
      <el-col>
        <div class="tabBlock">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="概况" name="first">
            <h5>夜观天象，传说一只未来大厨将从这里启程...</h5>
            <p>找到你会做的菜，传上你的作品</p>
            <p>找不到？你可以创建菜谱，亮出你的独门绝技</p>
          </el-tab-pane>
          <el-tab-pane label="菜谱" name="second">
            <div v-if="hasMenu"></div>
            <div v-if="!hasMenu">
              <el-row>
                <el-col :span="12"><h5>你还没有创建任何菜谱，快和厨友门分享一下自己的拿手好菜吧～</h5></el-col>
                <el-col :span="12"><el-button type="danger"><router-link to="/createMenu">创建菜谱</router-link></el-button></el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="收藏" name="third"></el-tab-pane>
          <el-tab-pane label="个人设置" name="fourth">
            <el-form ref="myForm" :model="myForm" label-width="120px">

              <el-form-item label="昵称">
                <el-input v-model="myForm.name"></el-input>
              </el-form-item>

              <el-form-item label="自我介绍：">
                <el-input type="textarea" v-model="myForm.desc"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger">更新信息</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <!-- <el-tab-pane label="修改密码" name="five">

          </el-tab-pane> -->
        </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name : 'myworks',
  data() {
    return {
      activeName : 'first',
      userName : 'xxx',
      hasMenu : false,
      myForm : {
        name : '',
        desc : ''
      }
    }
  },
  methods : {
    handleClick() {

    }
  }
}
</script>

<style scoped>
.myworks {
  width: 65%;
  margin: 0 auto;
}
.tabBlock {
  background: #F5F6F5;
  min-height: 550px;
  padding: 10px 15px 0 15px;
}
a:-webkit-any-link {
  color: #fff;
  text-decoration: none;
}
</style>


