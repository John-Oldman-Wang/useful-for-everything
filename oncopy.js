//复制时触发事件示例
document.body=function(e){
	//获取选择复制的选中的文本信息
	var selectText=window.getSelection().toString();
	//修改剪切板的内容
	e.returnValue=false;
	e.clipboardData.setData('text',selectText+'need more text')
}