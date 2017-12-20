import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home/home'
import Charts from './pages/charts/charts'
import Details from './pages/detail/details'
import NotFoundComponent from "./pages/404";

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home, name:'home'},
  {path: '/home', component: Home, name:'home'},
  {path: '/details/:id', component: Details, name: 'details'},
  {path: '/charts', component: Charts, name:'charts'},
  {path: '*', component: NotFoundComponent,name:'Page Not Found'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
