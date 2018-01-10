<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
    <ul>
	<h2>系统正在升级中.....</h2>
	<li>服务内容：</li>
	<li>1.考试答案</li>
	<li>2.在线作业答案  加入我们的QQ群:</li>
	<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=b9fb3593caf0772889bccf48a31fd3c893c14b1ae8b78bd40485c715d962ad90"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="天网智联" title="天网智联"></a>
    </ul>
    
    <ul>
	<h2>本网站技术支持由天网智联提供</h2>
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
