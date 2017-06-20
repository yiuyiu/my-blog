<template>
  <div>
    <common-head></common-head>
    <div class="ui grid">
      <div class="four wide column"></div>
      <div class="eight wide column">
        <form method="post" class="ui form segment">
          <div class="field required">
            <label>用户名</label>
            <input type="text" name="name" placeholder="用户名嘻嘻">
          </div>
          <div class="field required">
            <label>密码</label>
            <input type="text" placeholder="密码" name="password">
          </div>
          <input type="submit" class="ui button fluid" value="登陆">
        </form>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
  import CommonHead from '../components/Header.vue'
    export default{
      components:{
          CommonHead
      }
    }
</script>
