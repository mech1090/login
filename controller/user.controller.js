const modelUser = require('../model/user')
const bcrypt = require('bcrypt')
const config = require('config')
const serviceUser = require('../services/user.service')


const getLoginForm = (req,res)=>{
    res.render('login/layout')
}

const login = async(req,res)=>{
    const {email,password} = req.body
    const findUser = await modelUser.findOne({email})
    const matchPassword = await bcrypt.compare(password,findUser.password)
    if(!matchPassword){
        return res.render('login/layout',{message:'Email or Password Wrong'})
    }

    return res.render('login/layout',{message:'login successfull'})

}

const getSignForm = (req,res)=>{
    res.render('signup/layout')
}
const signup =async (req,res)=>{
    const {email,password} = req.body
    const emailField = {email}
    const passwordField = {password}
//    const fields = {email,password}
//    const emailFind = await serviceUser.find(emailField)
    const hashedPassword = await bcrypt.hash(password,config.get('hashing.salt'))
    const fields = {email,password:hashedPassword}
    const emailFind = await modelUser.findOne({email})
    if(emailFind){
        return res.render('login/layout',{message:'User Already exist Login'})
    }
    
 //   const newUser = await serviceUser.create(hashedfields)
      const newUser = await serviceUser.create(fields)
//    console.log(email,hashedPassword)
//    const newUser = await modelUser.create({email,password:hashedPassword})
    return res.render('signup/layout',{message:'New User Created'})
}

module.exports = {getLoginForm,login,getSignForm,signup}