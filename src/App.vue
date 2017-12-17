<template>
  <div id="app">
    <div class="munes">
      <span><router-link to="/home">Home</router-link></span>
      <span><router-link to="/demo1">demo1</router-link></span>
      <span><router-link to="/demo2">demo2</router-link></span>
      <span><router-link to="/demo3">demo3</router-link></span>
      <span><router-link to="/demo4">demo4</router-link></span>
    </div>
    <hr>
    <div class="dashborad">
      <router-view/>
    </div>
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

span {
  padding: 20px;
  font-size: 4rem;
}

a {
  text-decoration-line: none;
}

.router-link-active {
  text-decoration-line: none;
}

.munes {
  width: 100%;
  margin-bottom: 20px;
}

.dashborad {
  margin-top: 40px;
}
</style>
