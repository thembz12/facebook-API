const mongoose = require ("mongoose") 

const userSchema = new mongoose.Schema({
firstname:{
    type:String,
    require:true,
    trim:true},

surname:{
    type:String,
    require:true,
    trim:true},

email:{
    type:String,
    unique:true,
    require:true,
    trim:true},

day:{
    type:Number,
    require:true,
    trim:true},

month:{
    type:String,
    require:true,
    trim:true},

year:{
    type:Number,
    require:true,
    trim:true},

gender:{
    type:String,
    require:true,
    trim:true},

password:{
    type:String,
    require:true},

token:{type:String,
    require:true}

},{timestamps:true})

const userModel = mongoose.model("facebook", userSchema)
module.exports = userModel