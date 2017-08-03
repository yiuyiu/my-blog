<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <input type="text" name="txt1" v-model="text1">
         <input type="text" name="txt2" v-model="text2">
      <input type="file" class="file" ref="files">
      <input type="submit" value="提交">
      <div @click="xixi">xixi</div>
 </div>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import ax from 'axios'
export default {
  name: 'hello',
  data () {
    return {
        text1:'',
      text2:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      xixi(){
        console.log(this)
          console.log(1112)
         var filesElement=this.$refs.files
        var formData = new FormData();
// HTML 文件类型input，由用户选择
        formData.append("userfile", filesElement.files[0]);
        formData.append('text1',this.text1);
        formData.append('text2',this.text2);
        let headers={
          'Content-Type': 'multipart/form-data'
        };
        ax.post('http://localhost:3000/xixi',formData,{headers})
//        var request = new XMLHttpRequest();
//        request.open("POST", "http://localhost:3000/xixi");
//        request.setRequestHeader('Content-Type','multipart/form-data');
//        request.send(formData);
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
