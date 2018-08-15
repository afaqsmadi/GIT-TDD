const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;
db.on('error' , function(){
	console.log('mongoose not Connected !')
})
db.once('open' , function () {
	console.log("mongoose Connected !")
})


let catSchema = mongoose.Schema({
  
  catName:String,
  ownerEmail:String,
  imageUrl:String,
  adoptionMessage:String
});

let Cat = mongoose.model('Cat', catSchema);
//save function for data from user input 
let save = (req,res) => {
  let cat= new Cat({
  	catName:req.body.catName,
  	ownerEmail:req.body.ownerEmail,
  	imageUrl:req.body.imageUrl,
  	adoptionMessage:req.body.adoptionMessage
  })
  cat.save(function(err){
  	if(err){
  		return handleError(err)
  	}
  })
  res.json(cat)
  
}

module.exports.save = save;
module.exports.Cat = Cat;
