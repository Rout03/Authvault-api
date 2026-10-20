// <------------------------------------------------ COOKIES & BCRYPT & JWT----------------------------------------------------->

/*  
const express=require('express')
const cookieparser =require('cookie-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const app=express()

app.use(cookieparser())

app.get("/",(req,res)=>{
  res.cookie("name","Kausik")
  res.send("done")
})

 app.get("/hashed",(req,res)=>{
    bcrypt.genSalt(10,function (err,salt){
        bcrypt.hash("poloolo",salt,function(err,hash){
            console.log(hash)
        })
    })
}) 
// $2b$10$/GgCA5bB0K76DOuMSbcGk.aV5wuc1KvWW4UamMm2uxepGbGf7t.ZC

app.get("/access",function(req,res){
  let token= jwt.sign({email:"kausik@gmail.com"},"secret")
  res.cookie("token",token)
  res.send("done")
})

app.get("/verifies",function(req,res){
    let data=jwt.verify(req.cookies.token,"secret")
    console.log(data)
})

app.get("/match",(req,res)=>{
    bcrypt.compare("poloolo","$2b$10$/GgCA5bB0K76DOuMSbcGk.aV5wuc1KvWW4UamMm2uxepGbGf7t.ZC",function(err,result){
        console.log(result)
    })
})

app.get("/read",(req,res)=>{
    console.log(req.cookies)
    res.send("read page")
})

app.listen(3000) 


 */