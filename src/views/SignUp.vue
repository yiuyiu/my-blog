<template>
  <div>
    <common-head
    :blog="blog"></common-head>
    <!--form-data相关需要看看-->
    <div class="ui grid">
      <div class="four wide column"></div>
      <div class="eight wide column">
        <div class="ui form segment">
          <div class="field required">
            <label>用户名</label>
            <input type="text" placeholder="用户名" name="username" v-model="field.name" @blur="onblur">
          </div>
          <div class="field required">
            <label>密码</label>
            <input type="password" name="password" placeholder="密码" v-model="field.password">
          </div>
          <div class="field required">
            <label>重复密码</label>
            <input type="password" name="repassword" placeholder="重复密码" v-model="field.repassword">
          </div>
          <div class="field required">
            <label>性别</label>
            <select name="gender" class="ui compact selection dropdown" v-model="field.sex">
              <option value="m">男</option>
              <option value="f">女</option>
              <option value="x">保密</option>
            </select>
          </div>
          <div class="field required">
            <label>头像</label>
            <input type="file" name="avatar" ref="fileType">
          </div>
          <div class="field required">
            <label>个人简介</label>
            <textarea name="bio" rows="5" v-model="field.signature"></textarea>
          </div>
          <button class="ui button fluid" @click="onSubmit">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CommonHead from '../components/Header.vue'
  import ax from 'axios'
  export default{
      data(){
        return {
            field:{
              name:'',
              password:'',
              respassword:'',
              sex:'',
              signature:''
            },
            blog:{
                title:'xixi',
              des:'haha'
            }
        }
      },
     components:{
         CommonHead
     },
    methods:{
      onSubmit(){
        let filesElement=this.$refs.fileType;
        let formData = new FormData();
// HTML 文件类型input，由用户选择
        formData.append("avatar", filesElement.files[0]);
        formData.append('username',this.field.name);
        formData.append('password',this.field.password);
        formData.append('sex',this.field.sex);
        formData.append('signature',this.field.signature);
        const headers={
          'Content-Type': 'multipart/form-data'
        };
        ax.post('http://localhost:3000/signUp',formData,{headers})
      },
      onblur(){
          if(!this.field.name){
              return false;
          }
//          查看有无重复的
        ax.get('http://localhost:3000/isRegister', {
          params: {
            username: this.field.name
          }
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
<style></style>
