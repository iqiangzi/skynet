import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Demo1 from '../pages/demo1/Demo1'
import Demo2 from '../pages/demo2/Demo2'
import Demo3 from '../pages/demo3/Demo3'
import Demo4 from '../pages/demo4/Demo4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/demo3',
      name: 'Demo4',
      component: Demo4
    }
  ]
})
