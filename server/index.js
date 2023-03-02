const express = require('express')
const app = express()
require('module-alias/register'); //路径别名
var cors = require('cors')
app.use(cors())
const user = require('@/routes/user')
const menu = require('@/routes/menu')
const employee = require('@/routes/employee')
app.use('/system/user',user)
app.use('/system/menu',menu)
app.use('/employee/employee',employee)


app.listen(8080,()=>{
  console.log('app is running at http:127.0.0.1:8080')
})
