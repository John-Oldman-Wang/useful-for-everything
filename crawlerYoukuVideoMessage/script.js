if(window.location.href.indexOf('v.youku.com')!=-1){
	window.onload=function(){
		window.mes={}
		window.child=null
		window.closeChild=function() {
			window.child.close()
			var query=""
			for(var i in window.mes){
				query+=i+'='+window.mes[i]
			}
			var script=document.createElement('script')
			script.src='//127.0.0.1/saveMessage?'+query
			document.body.append(script)
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
}else if(window.location.href.indexOf('list.youku.com')!=-1){
	window.onload=function(){
		/*
			*编写抓取信息函数
		*/


		window.opener.closeChild()
	}
}else{}
