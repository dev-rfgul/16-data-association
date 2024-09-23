const mongoose = require('mongoose');



const postSchema=new mongoose.Schema({
    postData: String,
    user:String,
    date:{
        type:Date,
        date:Date.now()
    }

});

module.exports= mongoose.model('post',postSchema);