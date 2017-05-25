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
		if(!window.opener)
			return;
		var mbox=document.getElementsByClassName('mod fix')[0]
		//海报地址
		window.opener.mes.poster=mbox.getElementsByTagName('img')[0].src
		//简介
		window.opener.mes.summary=mbox.getElementsByClassName('intro-more')[0].innerText.replace('简介：','')
		//title
		window.opener.mes.title=mbox.getElementsByClassName('p-row p-title')[0].childNodes[1].nodeValue.replace('：','')
		//doctor
		window.opener.mes.doctor=mbox.getElementsByClassName('p-performer')[0].nextSibling.getElementsByTagName('a')[0].innerText
		//actors
		window.opener.mes.actors=mbox.getElementsByClassName('p-performer')[0].title
		//year
		window.opener.mes.year=mbox.getElementsByClassName('p-alias')[0].nextSibling.getElementsByTagName('span')[0].innerText.split('：')[1].split('-')[0]

		window.opener.closeChild()
	}
}else{
	//var UrlReg=/v\.youku\.com\\/g
	window.onload=function(){
		var aEle=document.getElementsByTagName('a')
		for(var i=0;i<aEle.length;i++){
			if(a[i].href.indexOf("v.youku.com/")>-1){
				var script=document.createElement('script')
				script.src='//127.0.0.1/saveMessage?'+query
				document.body.append(script)
			}
		}
		alert('have done checking out all a element\n,you can close this window')
	}
}
