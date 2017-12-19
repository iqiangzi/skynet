import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Home from './pages/home/home.vue'
import Charts from './pages/charts/charts'
import Details from './pages/detail/details.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Home, name:'home',
   children: [
        {
          path: 'footer',
          component: Footer
        }
      ]
  },
  {path: '/details/:id', component: Details, name: 'details'},
  {path: '/charts', component: Charts, name:'charts'},
  {path: '*', component: Home, name:'home'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
