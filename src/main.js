// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {checkToken} from './service/service'
// 用了import后貌似把css里的相关地址也引入进来了
import '../lib/semantic.min.css'
Vue.config.productionTip = false;
// 是否登陆
Vue.prototype.$global={
  isLogged:false,
  userInfo:''
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



