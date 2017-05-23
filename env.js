/*
	*获取输入参数，约定输入格式为key+'='+value,例如node app.js key1=value1 key2=value2
	*模块化的新的理解，一个js文件的的全局作用域的this就是module.exports暴露出去的变量
	*例如1.js全局声明this.a=3,在2.js中引入1.js：var r=require('1.js') r.a==3 is true
*/
var self=this
process.argv.splice(2).forEach(function(item) {
	self[item.split('=')[0]]=item.split('=')[1]
})
console.log(module.exports)