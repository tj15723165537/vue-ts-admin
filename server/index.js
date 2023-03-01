const express = require('express')
const app = express()
require('module-alias/register'); //路径别名
var cors = require('cors')
app.use(cors())
const user = require('@/module/system/user/index')
const menu = require('@/module/system/menu/index')
const employee = require('@/module/employee/employee/index')
app.use('/system/user',user)
app.use('/system/menu',menu)
app.use('/employee/employee',employee)


app.listen(8080,()=>{
  console.log('app is running at http:127.0.0.1:8080')
})
