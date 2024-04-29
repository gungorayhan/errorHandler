const express = require("express")
const fs = require("fs")
const path = require("path")
const {NotFoundError,InternalServerError} = require("./CustomErrorHandler")

const app= express();



app.use(express.json())

// app.get("/",(req,res)=>{
//     try {
//         fs.writeFileSync(__dirname,"message.csv","custom error try")
//         res.status(201).send("İşlem balşarılı")
//     } catch (error) {
//         throw new Error("error message")
//     }
// })

app.get("/notfound",(req,res)=>{
    throw new NotFoundError()
})

app.get("/server",(req,res)=>{
    throw new InternalServerError()
})


app.use((err,req,res,next)=>{
   console.log(err)
return res.status(err.statusCode).json({
    status:"error",
    code:err.statusCode,
    message:err.message 
})
})

app.listen(5000,()=>{
    console.log("server runing on port 5000")
})