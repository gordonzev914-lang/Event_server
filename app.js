import express from "express"
import {createUser} from "utils.js"
const app=express()
const port=3000

app.post('/user/register',(req,res)=>{
const newUser=req.body
createUser(newUser)
res.send({"message":"User registered successfully" })
})








app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
        
})