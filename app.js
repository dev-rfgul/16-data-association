const express= require ('express');
const app= express();

const userModel=require('./models/user');
const postModel=require('./models/post');

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/create', (req, res) => {
    res.send('Hello World this is create page');
})

app.listen(3000);