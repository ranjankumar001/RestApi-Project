const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv/config')

app.use(bodyParser.json())

const postRouter=require('./routes/posts')

app.get('/', (req, res) => {
    res.send('We are on home')
});

app.use('/post',postRouter)

app.listen(3000, () => {
    console.log(`Server started on port`);
});

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('connected to database')
});