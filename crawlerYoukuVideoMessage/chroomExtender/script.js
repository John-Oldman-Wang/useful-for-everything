
if(window.location.href.indexOf('v.youku.com')!=-1){
	window.onload=function(){
		window.mes={}
		window.child=null
		window.closeChild=function() {
			window.child.close()
		}
		window.openChild=function(url) {
			window.child=window.open('url')
		}
		var mNode=document.getElementById('sMain').getElementsByClassName('desc-link')[0]
		var href=mNode.href
		/*
			*编写抓取信息函数

		*/
		window.mes.flash=document.getElementById('movie_player').childNodes[5].value
		window.openChild(mNode.href)

	}
}else{
	window.onload=function(){
		/*
			*编写抓取信息函数

		*/


		window.opener.closeChild()
	}
}
