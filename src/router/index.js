import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from '@/view/classify'
import Beauty from '@/view/beauty'
import Shopcar from '@/view/shopcar'
import empty from '@/view/shopcar/children/empty'
import shoplist from '@/view/shopcar/children/shoplist'

import Mine from '@/view/mine'
import Detail from '@/view/detail'
import dity from '@/view/detail/children/dity'
import param from '@/view/detail/children/param'
import review from '@/view/detail/children/review'

import Recom from '@/view/recom'
import Special from '@/view/special'
import Clschild from '@/view/clschild'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/Beauty',
      name: 'Beauty',
      component: Beauty
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: Shopcar,
      children: [
        {
          path: 'shoplist',
          component: shoplist,
          beforeEnter: (to, from, next) => {
            var user = window.localStorage["userMsg"];
            var list = window.localStorage["list"];
            if(list.length>3){
              next()
            }else{
              next('/Shopcar/empty')
            }
          }
        },
        {
          path: 'empty',
          component: empty
        }
      ]

    },
    {
      path: '/Mine',
      name:'Mine',
      component: Mine
    },
    {
      path: '/Detail',
      name:'Detail',
      component: Detail,
      // redirect: '/Detail/dity',
      children: [
        {
          path:'dity',
          component: dity
        },
        {
          path:'param',
          component: param
        },
        {
          path:'review',
          component: review
        }
      ]
    },
    {
      path: '/Recom',
      name: 'Recom',
      component: Recom
    },
    {
      path: '/Special',
      name: 'Special',
      component: Special
    },
    {
      path: '/Clschild',
      name: 'Clschild',
      component: Clschild
    }
  ]
})
