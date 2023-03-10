const express = require('express')
const app = express()

require('module-alias/register'); //路径别名

var cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {protect} = require("@/middlewares/auth");
app.use(protect)

// const errorHandler = require("@/middlewares/errorHandler");
// app.use(errorHandler);

const common = require('@/routes/common')
const user = require('@/routes/user')
const menu = require('@/routes/menu')
const employee = require('@/routes/employee')

app.use('/', common)
app.use('/system/user', user)
app.use('/system/menu', menu)
app.use('/employee/employee', employee)

app.listen(8080, () => {
  console.log('app is running at http:127.0.0.1:8080')
})
