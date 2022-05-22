
const getLoginForm = (req,res)=>{
    console.log('HITTING LOGIN FORM')
    res.render('login/layout')
}

const getSignForm = (req,res)=>{
    console.log('HITTING SIGNUP FORM')
    res.render('signup/layout')
}

module.exports = {getLoginForm,getSignForm}