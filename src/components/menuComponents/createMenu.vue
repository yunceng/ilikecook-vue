<template>
  <div class="createDiv">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="菜谱名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传菜谱封面</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="菜谱描述：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="用料：">
        <el-row>
          <el-col :span="12"><el-input v-model="menuFoodInList[0].name" placeholder="请输入食材"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[0].num" placeholder="请输入用量"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[1].name" placeholder="请输入食材"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[1].num" placeholder="请输入用量"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[2].name" placeholder="请输入食材"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[2].num" placeholder="请输入用量"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[3].name" placeholder="请输入食材"></el-input></el-col>
          <el-col :span="12"><el-input v-model="menuFoodInList[3].num" placeholder="请输入用量"></el-input></el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="做法：">
        <el-input v-model="menuStepInfoList[0].desc"></el-input>
        <el-input v-model="menuStepInfoList[1].desc"></el-input>
        <el-input v-model="menuStepInfoList[2].desc"></el-input>
        <el-input v-model="menuStepInfoList[3].desc"></el-input>
        <el-input v-model="menuStepInfoList[4].desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="danger">发布菜谱</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name : 'create',
  data() {
    return {
      form : {
        name : 'xxx',
        desc : '',
        ingredients : [],
        practice : []
      },
      fileList : [],
      menuFoodInList : [
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' },
        { name : '', num : '' }],
      menuStepInfoList : [
        {desc : '', order : 1},
        {desc : '', order : 2},
        {desc : '', order : 3},
        {desc : '', order : 4},
        {desc : '', order : 5},
        ]
    }
  },
  methods : {
    handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
    handlePreview(file) {
        // console.log(file);
    },
    handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.createDiv {
  width: 65%;
  margin: 0 auto;
  padding: 10px 30px 0 0;
  background: #F5F6F5;
}
a:-webkit-any-link {
  color: #ffffff;
  text-decoration: none;
}
</style>


