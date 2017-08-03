// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {checkToken} from './service/service'
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
// 判断toke
let token=window.localStorage.getItem('token');
// 首页
// router.push('signIn')
if(token){
  // 有token的话先去加载页，验证成功后，进入首页
  router.push('load');
  ax.defaults.headers.common['Authorization'] =token;
  checkToken().then(res=>{
    if(res.data.success){
      router.push('/')
    }else{
      router.push('signIn')
    }
    console.log(res.data)
  })
}


