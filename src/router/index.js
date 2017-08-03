import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/views/SignUp/SignUp.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import Post from '../views/Posts/Post.vue'
import Loading from '../components/Loading.vue'
import ax from 'axios'
import {checkToken} from '../service/service'
Vue.use(Router)

const route=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/signUp',
      component:SignUp,
      meta: { requiresAuth: false,requireNoAuth:true}
    },
    {
      path:'/signIn',
      component:SignIn,
      meta: { requiresAuth: false,requireNoAuth:true}
    },
    {
      path:'/posts',
      component:Post,
      meta: { requiresAuth: true }
    },
    {
      path:'/load',
      component:Loading
    }
  ]
});
route.beforeEach((to,from,next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)){
    // 判断toke
    let token=window.localStorage.getItem('token');
// 首页
    if(token){
      // 有token的话先去加载页，验证成功后，进入首页
      // next('load');
      ax.defaults.headers.common['Authorization'] =token;
      console.log(checkToken())
      checkToken().then(res=>{
        console.log(res)
        if(res.data.success){
          next()
        }else{
          next('signIn')
        }
        console.log(res.data)
      })
    }
    else{
      next('signIn')
    }
  }
  if (to.matched.some(record => record.meta.requireNoAuth)){
    console.log(333)
    let token=window.localStorage.getItem('token');
    if(token){
      ax.defaults.headers.common['Authorization'] =token;
      checkToken().then(res=>{
        console.log(res)
        if(res.data.success){
          next('posts')
        }else{
          next()
        }
      })
    }
    next();
  }
});
export default route
