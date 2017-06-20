<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding-top: 40px;
  }

  a:hover {
    border-bottom: 3px solid #4fc08d;
  }

  .button {
    background-color: #4fc08d !important;
    color: #fff !important;
  }

  .avatar {
    border-radius: 3px;
    width: 48px;
    height: 48px;
    float: right;
  }
</style>
