<template>
  <div class="wrap">
    <div v-bind:class="isBig ? 'wrap-left':'wrap-left-sm'">
      <my-menu @changeSize="changeSize"></my-menu>
    </div>
    <div  v-bind:class="isBig ? 'wrap-right':'wrap-right-lg'">
      <div class="header">
        <my-header></my-header>
      </div>
      <div class="content"> 
      <router-view></router-view>
      </div>
      <div class="footer">
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/header'
import MyFooter from './components/footer'
import myMenu from './components/menu'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    myMenu
  },
  data() {
    return {
      isBig : true
    }
  },
  methods: {
    changeSize: function (isBig){
      this.isBig = isBig;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrap-left{
  float: left;
  width: 200px;
  height: calc(100vh - 40px);
}
.wrap-left-sm {
  float: left;
  width: 60px;
  height: calc(100vh - 40px);
}

.wrap-right{
   float: left;
  width: calc(100vw - 200px);
  background: #fff;
}
.wrap-right-lg{
  float: left;
  width: calc(100vw - 60px);
  background: #fff;
  height: calc(100vh - 40px);
}
.wrap-right>div{
  width: 100%;
}
.wrap-right .header{
  height: 60px;
}
.wrap-right .content{
  height: calc(100vh - 100px);
}
.wrap-right .footer{
  height: 40px;
  bottom: 0;
  background: #232323;
}
</style>
