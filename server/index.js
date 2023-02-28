const express = require('express')
const app = express()
const user = require('./module/system/user/index')
app.use('/system',user)


app.listen(8080,()=>{
  console.log('app is running at http:127.0.0.1:8080')
})