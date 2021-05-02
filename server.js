const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
//Get Infos 
app.get('/',(req,res)=>{
    res.status(200).json(data)
})
//Get Specifics Infos
app.get('/byId/:id',(req,res)=>{
    const id = req.params.id
    const user = data.find(item =>item.id === id)
    res.status(200).send(user)
})
const port = process.env.PORT || 4000
app.listen(port,()=>console.log('server is running'))
module.exports = app