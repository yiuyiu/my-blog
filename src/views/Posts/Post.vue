<template>
  <div>
    <common-head></common-head>
    <p>这是首页登录了才能进来哦</p>
  </div>

</template>
<style></style>
<script>
  import CommonHead from '../../components/Header.vue'
  import {getPosts} from '../../service/service'
    export default{
      created(){
          getPosts().then(res=>{

          })
      },
      components:{
        CommonHead
      }
    }
</script>
