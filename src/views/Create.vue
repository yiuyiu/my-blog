<template>
  <div>
    <common-head></common-head>
    <div class="ui grid">
      <div class="four wide column">
        <a class="avatar" href="/posts">
          <img class="avatar" :src="pic">
        </a>
      </div>

      <div class="eight wide column">
        <div class="ui form segment">
          <div class="field required">
            <label>标题</label>
            <input type="text" name="title" v-model="title">
          </div>
          <div class="required field">
            <label>内容</label>
            <textarea name="content" rows="15" v-model="content"></textarea>
          </div>
          <input type="submit" class="ui button" value="发布" @click="submit">
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
  import CommonHead from '../components/Header.vue'
  import {create} from '../service/service'
    export default{
      data(){
        return {
            pic:'',
          title:"",
          content:""
        }
      },
      created(){
        let host='http://localhost:3000/public/img/'
        this.pic=host+this.$global.userInfo.avatar;
      },
      components:{
          CommonHead
      },
      methods:{
          submit(){
              let _id=this.$global.userInfo._id;
              create(_id,this.title,this.content).then(res=>{
                  if(res.data.success){
                      this.$router.push('posts');

                  }
              })
          }
      }
    }
</script>
