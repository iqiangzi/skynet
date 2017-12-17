<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/demo1">demo1</router-link></li>
      <li><router-link to="/demo2">demo2</router-link></li>
      <li><router-link to="/demo3">demo3</router-link></li>
      <li><router-link to="/demo4">demo4</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  left: 0;
}

ul li {
  list-style: none;
  float: left;
  margin: 5px;
  background-color: #eeeeee;
}

ul li a{
  text-decoration:none; 
}
</style>
