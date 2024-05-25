import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.json({msg:'hello'})
})

const port = 400
app.listen(port,()=>{
    console.log(port)
})