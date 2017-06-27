import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/views/SignUp/SignUp.vue'
import SignIn from '../views/SignIn/SignIn.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/signUp',
      component:SignUp
    },
    {
      path:'/signIn',
      component:SignIn
    }
  ]
})
