const mongoose = require('mongoose');



const postSchema=new mongoose.Schema({
    postData: String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    date:{
        type:Date,
        date:Date.now()
    }

});

module.exports= mongoose.model('post',postSchema);