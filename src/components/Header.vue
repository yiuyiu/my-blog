<template>
  <header>
    <nav-bar></nav-bar>
    <nav-setting></nav-setting>
    <!--<notice-->
    <!--:success="success"-->
    <!--:error="error"></notice>-->
  </header>
</template>
<style></style>
<script>
  import NavBar from '@/components/Nav.vue'
  import NavSetting from '../components/NavSetting.vue'
  import Notice from '../components/Notification.vue'
    export default{
      props:['blog','user','success','error'],
      components:{
          NavBar,NavSetting,Notice
      }
    }
</script>
