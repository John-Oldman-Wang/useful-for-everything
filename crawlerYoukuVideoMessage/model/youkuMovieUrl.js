var mongoose =require("mongoose")
var youkuMovieUrlSchema=new mongoose.Schema({
	url:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})
youkuMovieUrlSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}
	else{
		this.meta.updateAt=Date.now()
	}
	next()
})
var youkuMovieUrl=mongoose.model('youkuMovieUrl',youkuMovieUrlSchema)
module.exports=youkuMovieUrl