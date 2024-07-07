const express = require ("express")
require ("dotenv").config()

require ("./config/dbConfig.js")

const port = process.env.port || 1293
const app = express()
app.use(express.json())
const router = require("./router/userRouter.js")
app.use(router)



app.get("/ ",(req,res)=>{
   res.status(200).json({message:"WELCOME TO FACEBOOK"}) 
})

app.listen(port,()=>{
    console.log("server is listening to port", port);
})