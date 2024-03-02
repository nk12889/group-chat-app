const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended:false}));


const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');




app.use(userRoutes);
app.use(messageRoutes);



app.listen(3000,()=>{
    console.log(`Server started at port ${3000}`);
})