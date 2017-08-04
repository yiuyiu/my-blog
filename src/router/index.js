import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/views/SignUp/SignUp.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import Post from '../views/Posts/Post.vue'
import Create from '../views/Create.vue'
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
      path:'/create',
      component:Create,
      meta:{requiresAuth:true}
    },
    {
      path:'/load',
      component:Loading
    }
  ]
});
route.beforeEach((to,from,next)=>{
  let token=window.localStorage.getItem('token');
  if(token){
    // 有token的话先去加载页，验证成功后，进入首页
    // next('load');
    ax.defaults.headers.common['Authorization'] =token;
    checkToken().then(res=>{
      if (to.matched.some(record => record.meta.requiresAuth)){
        if(res.data.success){
          Vue.prototype.$global.isLogged=true;
          Vue.prototype.$global.userInfo=res.data.userInfo;
          next();
        }else{
          next('signIn')
        }
      }
      if (to.matched.some(record => record.meta.requireNoAuth)){
        if(res.data.success){
          Vue.prototype.$global.isLogged=true;
          Vue.prototype.$global.userInfo=res.data.userInfo;
          next('/posts');
        }else{
          next();
        }
      }
    })
  }
  if(!token){
    if (to.matched.some(record => record.meta.requireNoAuth)){
      next();
    }
    if (to.matched.some(record => record.meta.requiresAuth)){
      next('signIn');
    }
  }
});
export default route
