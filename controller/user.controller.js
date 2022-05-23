const modelUser = require('../model/user')
const bcrypt = require('bcrypt')
const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = async(req,res)=>{
    const {email,password} = req.body
    console.log(email,password)

    return res.render('login/layout',{message:'login successfull'})

}

const getSignForm = (req,res)=>{
    res.render('signup/layout')
}
const signup = (req,res)=>{

}

module.exports = {getLoginForm,login,getSignForm,signup}