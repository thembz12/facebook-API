const userModel = require ("../model/userModel.js")
const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcrypt")

exports.SignUp = async (req,res)=>{
    try {
        const {firstname, surname, email, day, month, year, gender, password, token}= req.body
        const userExist = await userModel.findOne({email})
        if(userExist){
            res.status(400).json({message:"there is an existing user with this email"})
        }else{
            const saltedpassword = await bcrypt.genSalt(10)
            const hashedpassword = await bcrypt.hash(password, saltedpassword)
            const data = {firstname, surname, email, day, month, year, gender, password:hashedpassword, token}
            const user = await userModel.create(data)
            res.status(201).json({message:"user created successfully", user})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }}

exports.login = async (req,res)=>{
    try {
            const {email,password}=req.body
            const verifyEmail = await userModel.findOne({email})
            if(!verifyEmail){
                res.status(404).json({message:"check your email, it's entered wrongly",email})
            }else{
                const verifyPassword = await bcrypt.compare(password, verifyEmail.password)
                if(!verifyPassword){
                res.status(400).json({message:"incorrect password"})
                }else{
                    const token = await jwt.sign({
                    surname: verifyEmail.surname,
                    email:email
                    }, process.env.JWT_SECRET,{expiresIn:"1h"})
                    res.status(200).json({message:"loggedIn successfully",token})
                }}
    } catch (error) {
            res.status(500).json(error.message)}}

exports.logout = async (req,res)=>{
    try {
        const token = req.headers.authorization
        const accountWithToken = await userModel.find({token})
        if(!accountWithToken){
            res.status(400).json({message:"account not signedIn"})
        }else accountWithToken.token = null
        res.status(200).json({message:"logged out successfully"})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }  
}