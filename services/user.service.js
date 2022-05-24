const modelUser = require('../model/user')
const config = require('config')
const bcrypt = require('bcrypt')

const find = async(fields)=>{
    const findEmail = modelUser.findOne(fields)
    return findEmail
}

const create = async(fields)=>{
    console.log(fields)
    const newUser = await modelUser.create(fields)
    return newUser
}

module.exports = {find,create}