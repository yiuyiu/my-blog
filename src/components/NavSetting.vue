<template>
  <div class="nav-setting">
    <div class="ui buttons">
      <div class="ui floating dropdown button" @click="showMenu">
        <i class="icon bars"></i>
        <div class="menu" :class="{'show-menu':hasMenu}">
          <template v-if="isLogged">
            <!--<a class="item" href="/posts?author=<%= user._id %>">个人主页</a>-->
            <a class="item" href="/posts">个人主页</a>
            <div class="divider"></div>
            <a class="item" href="/posts/create">发表文章</a>
            <a class="item" @click="logout">登出</a>
          </template>
          <template v-else>
            <a class="item" href="/signin">登录</a>
            <a class="item" href="/signup">注册</a>
          </template>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .nav-setting {
    position: fixed;
    right: 30px;
    top: 35px;
    z-index: 999;
  }

  .nav-setting .ui.dropdown.button {
    padding: 10px 10px 0 10px;
    background-color: #fff !important;
  }
  .menu.show-menu{
    display: block;
  }
  .nav-setting .icon.bars {
    color: #000;
    font-size: 18px;
  }
</style>
<script>
  export default{
      data(){
        return{
            hasMenu:'',
            isLogged:''
        }
      },
    created(){
      console.log('global: '+this.$global.isLogged);
      this.isLogged=this.$global.isLogged;
    },
    methods:{
        logout(){
          localStorage.clear();
          this.$global.isLogged=false;
          this.$router.push('signIn');
        },
        showMenu(){
           this.hasMenu=!this.hasMenu;
        }
    }
  }
</script>
