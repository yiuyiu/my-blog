<template>
  <div>
    <common-head></common-head>
    <div class="ui grid">
      <div class="four wide column">
        <a class="avatar" href="/posts"></a>
           <!--href="/posts?author=<%= user._id%>"-->
      </div>

      <div class="eight wide column">
        <form method="post" class="ui form segment" action="/posts">
          <div class="field required">
            <label>标题</label>
            <input type="text" name="title">
          </div>
          <div class="required field">
            <label>内容</label>
            <textarea name="content" rows="15"></textarea>
          </div>
          <input type="submit" class="ui button" value="发布">
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
