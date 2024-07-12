const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('This is hello from jenkins pipeline')
})

const PORT = 4000
app.listen(PORT,(err)=>{
    (err)?console.log(err.message):console.log(`server is online at http://localhost:${PORT}`)
})