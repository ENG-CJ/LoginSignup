const express = require('express')
const app = express()
const cor = require('cors')


app.use(cor())
app.use(express.json())

app.get("/test",(req,res)=>{
    return res.send({Message: "server is runnning"})
})



const r = require("./routers/usersRouter")

app.use("/users",r)
app.listen(3200,()=>{
    console.log("server is cooking")
})