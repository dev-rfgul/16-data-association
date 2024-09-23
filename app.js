const express = require('express');
const app = express();

app.use(express.json())

const userModel = require('./models/user');
const postModel = require('./models/post');
const user = require('./models/user');

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/create', async (req, res) => {
    let { username, email, age, post } = req.body;
    let user = await userModel.create({
        username: "Fahad",
        age: "23",
        email: "raofahadgul785@gmail.com"

    })
    console.log(user)
    res.send(user)
})
app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postData: "hello world this is my 1st post",
        user: "66f1095fd6c1c836337cd0d4",

    })
    let user= await userModel.findOne({_id:"66f1095fd6c1c836337cd0d4"});
    user.post.push(post.id);
    // when we are doing things hardcoded then we have to save it 

    await user.save();
    res.send({post,user})
})

app.listen(3000);