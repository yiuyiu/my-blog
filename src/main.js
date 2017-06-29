// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ax from 'axios'
Vue.prototype.$http=ax;
// 用了import后貌似把css里的相关地址也引入进来了
import '../lib/semantic.min.css'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// 判断token
let token=window.localStorage.getItem('token');
// 首页
// router.push('signIn')
if(token){
  ax.defaults.headers.common['Authorization'] =token;
  ax.post('http://localhost:3000/signIn').then(res=>{
    console.log(res.data)
  })
}


