import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/views/SignUp/SignUp.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import Post from '../views/Posts/Post.vue'
import Loading from '../components/Loading.vue'
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
      meta: { requiresAuth: true }
    },
    {
      path:'/signIn',
      component:SignIn,
      meta: { requiresAuth: true}
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
    console.log('123')
  }
   next();
});
export default route
