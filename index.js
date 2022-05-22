const express = require('express')
const cors = require('cors')
const config = require('config')
const { default: mongoose } = require('mongoose')
require('./db')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('PLUMBING OKK')
})

app.get('*',(req,res)=>{
    res.status(404).send('BAD_REQUEST')
})

const port = config.get('port')


mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
        console.log(`SERVER IS RUNNING ON PORT ${port}`)
    })
    console.log('DB CONNECTED')
})
