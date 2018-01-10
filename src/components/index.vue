<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
    <ul>
	<h2>系统正在升级中.....</h2>
	<li>服务内容：</li>
	<li>1.考试答案</li>
	<li>2.在线作业答案</li>
    </ul>
    
    <ul>
	<h2>本网站技术支持由天网科技提供</h2>
    </ul>

  </div>
 
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎使用继续教育答案查看系统'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color:red;
}
a {
  color: #42b983;
}
</style>
