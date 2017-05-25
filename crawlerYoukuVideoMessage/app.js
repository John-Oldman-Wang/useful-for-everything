var express=require('express')
var mongoose=require("mongoose")
mongoose.Promise=Promise
var dburl="mongodb://localhost/movies"
mongoose.connect(dburl)
var app=express()
var port=80
var Movie=require('./model/movieModel.js')
var YoukuMovieUrl=require('./model/youkuMovieUrl.js')
app.get('/saveMessage',function(req,res) {
	var obj=req.query
	console.log(obj)
	var _movie=new Movie(obj)
	_movie.save(function(err,movie) {
		if(err){
			res.end('alert('+err.message+')')
		}else{
			res.end('close()')
		}
	})
})
app.get('/nextUrl',function(req,res) {
	YoukuMovieUrl.find({})
	res.end()
})

app.listen(port)