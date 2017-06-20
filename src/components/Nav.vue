<template>
  <div class="nav">
    <div class="ui grid">
      <div class="four wide column"></div>
      <div class="eight wide column">
        <a href="/posts">
          <h1>{{blogTitle}}</h1>
        </a>
        <p>{{blogDes}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .nav {
    margin-bottom: 20px;
    color: #999;
    text-align: center;
  }

  .nav h1 {
    color: #4fc08d;
    display: inline-block;
    margin: 10px 0;
  }

</style>
<script>
    export default{
        props:['blogTitle','blogDes']
    }
</script>
