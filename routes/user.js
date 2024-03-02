const express = require('express');

const router = express.Router();


router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message" method="POST"  ><input id="username" type="text" name="title" placeholder="Username"><button type="submit">Login</button></form>')
})

router.post('/message',(req,res,next)=>{
    // res.send('<form  action="/" method="POST" ><input id="message" type="text" name="Message" placeholder="Type message"><button type="submit">Send</button></form>')
    res.redirect('/')
})



module.exports= router;