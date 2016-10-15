<template>
  <table border="1">
	<tr>
		<th>用户名</th>
		<th>密码</th>
		<th>邮箱</th>
		<th>uid</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      userData:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table {
	width: 800px;
    margin-left: 100px;
	font-family: verdana,arial,sans-serif;
	font-size:11px;
	color:#333;
	border-width: 1px;
	border-color: #666;
	border-collapse: collapse;
}
table th {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666;
	background-color: #80db01;
}
table td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666;
	background-color: #ffffff;
}
</style>
