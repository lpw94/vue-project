import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home' //为什么要加@
import Detail from '@/components/Detail'
import Tip from '@/components/Tip'
import VueResource from 'vue-resource'  
Vue.use(VueResource)  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
    	path: '/detail/:id/title/:title',
    	name: 'detail',
    	component: Detail
    },
    {
      path: '/Tip',
      name: 'Tip',
      component: Tip
    },
    { path: '*', redirect: '/' }
  ]
})
