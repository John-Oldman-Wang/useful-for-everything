/*
	*获取输入参数，约定输入格式为key+'='+value
	*例如node app.js key1=value1 key2=value2
	*模块化的新的理解：
	*一个js文件的的全局作用域的this就是module.exports暴露出去的对象
	*例如1.js全局声明this.a=3,在2.js中引入1.js：
	*var r=require('1.js') r.a==3 is true
	*每个js文件的全局作用域的this变量无法直接赋值
	*do this=3 will throw error,this本身是一个空对象
	*可以在对象上赋值，但是不能修改this这个object本身
	*如果要抛出一个函数对象，需要使用module.exports=function(){} object
*/
var self=this
process.argv.splice(2).forEach(function(item) {
	self[item.split('=')[0]]=item.split('=')[1]
})