const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fahad:WXX6mMBb8q6qS6E@cluster0.vz7c8.mongodb.net/myDatabase?retryWrites=true&w=majority');



const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            //in short its type is id,
            ref:'post'
            // this is the reference for the id that where it will be coming,
        }
    ],
});

module.exports = mongoose.model('user', userSchema);