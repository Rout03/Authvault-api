const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/jwt_db",{
    serverSelectionTimeoutMS:5000
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log(`connection error ${err}`)
})

module.exports=mongoose;



