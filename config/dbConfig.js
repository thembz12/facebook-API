require("dotenv").config()
const mongoose = require ("mongoose")
const URL = process.env.DatabaseURL


mongoose.connect(URL).then(()=>{
    console.log("Database is active and ready to be use");
}).catch(()=>{
    console.log("there was an error trying to connect to database because:");
})