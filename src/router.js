import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/views/menu'
import detail from '@/views/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/:index',
      name: 'detail',
      component: detail
    }
  ]
})
