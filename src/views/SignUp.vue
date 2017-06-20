<template>
  <div>
    <common-head
    :blog="blog"></common-head>
    <!--form-data相关需要看看-->
    <form class="ui grid" method="post">
      <div class="four wide column"></div>
      <div class="eight wide column">
        <form class="ui form segment" enctype="multipart/form-data">
          <div class="field required">
            <label>用户名</label>
            <input type="text" placeholder="用户名" name="username" v-model="field.name">
          </div>
          <div class="field required">
            <label>密码</label>
            <input type="password" name="password" placeholder="密码" v-model="field.password">
          </div>
          <div class="field required">
            <label>重复密码</label>
            <input type="password" name="repassword" placeholder="重复密码" v-model="field.password">
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
            <input type="file" name="avatar">
          </div>
          <div class="field required">
            <label>个人简介</label>
            <textarea name="bio" rows="5" v-model="field.intro"></textarea>
          </div>
          <input type="submit" class="ui button fluid" value="注册">
          <!--<button class="ui button fluid" @click="onSubmit">注册</button>-->
        </form>
      </div>
    </form>
  </div>
</template>
<script>
  import CommonHead from '../components/Header.vue'
  export default{
      data(){
        return {
            field:{
              password:''
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
              console.log(111)
      }
    }
  }
</script>
<style></style>
