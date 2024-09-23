const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fahad:WXX6mMBb8q6qS6E@cluster0.vz7c8.mongodb.net/myDatabase?retryWrites=true&w=majority');


const userSchema=new mongoose.Schema({
    username: String,
    email: String,
    age:Number,
    post:Array,
});

module.exports= mongoose.model('user',userSchema);