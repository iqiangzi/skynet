<template>
  <div id="app">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">菜单2</a></li>
      <li><a href="#">菜单3</a></li>
      <li><a href="#">菜单4</a></li>
      <li><a href="#">菜单5</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
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
