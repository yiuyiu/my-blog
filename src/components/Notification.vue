<template>
  <div class="ui grid">
    <div class="four wide column"></div>
    <div class="eight wide column">
      <template v-if="success">
        <div class="ui success message">
          <p>{{success}}</p>
        </div>
      </template>
      <template v-if="error">
          <div class="ui error messaga">
            <p>{{error}}</p>
          </div>
      </template>
    </div>
  </div>
</template>
<style>

</style>
<script>
    export default{
        props:['success','error']
    }
</script>
