
const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = (req,res)=>{}

const getSignForm = (req,res)=>{
    res.render('signup/layout')
}
const signup = (req,res)=>{

}

module.exports = {getLoginForm,login,getSignForm,signup}