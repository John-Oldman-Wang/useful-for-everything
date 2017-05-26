var express=require('express')
var mongoose=require("mongoose")
mongoose.Promise=Promise
var dburl="mongodb://localhost/movies"
mongoose.connect(dburl)
var Movie=require('./model/movieModel.js')
var YoukuMovieUrl=require('./model/youkuMovieUrl.js')


var app=express()
var port=80
app.set('views','./views')

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
app.get('/movielist',function(req,res) {
	Movie.find({},function(err,movies) {
		res.render('list.ejs',{
			movies:movies
		})
	})
})
app.get('/watch/:movieid',function(req,res) {
	Movie.findOne({_id:req.params.movieid},function(err,movie){
		if(err){
			console.log(err)
			res.end('404 NOT FOUND')
		}
		res.render('watch.ejs',{
			movie:movie
		})
	})
})
app.locals.countNextUrl=0
app.get('/nextUrl',function(req,res) {
	YoukuMovieUrl.find({})
	res.end()
})

app.listen(port)