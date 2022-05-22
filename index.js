const express = require('express')
const cors = require('cors')

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

const port = 3300

app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})