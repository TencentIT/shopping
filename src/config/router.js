import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../page/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../page/account/login')
    },
    {
      path: '/login/phone',
      name: 'login-phone',
      component: () => import('../page/account/phone-login')
    },
    {
      path: '/login/password',
      name: 'password-login',
      component: () => import('../page/account/password-login')
    },
    {
      path: '/login/register',
      name: 'register-login',
      component: () => import('../page/account/register-login')
    }
  ]
})
