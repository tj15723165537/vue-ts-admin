const express = require('express')
const router = express.Router()
router.get('/list', (req, res) => {
  const data = require('./data.js')
  res.send({
    code:0,
    data,
    msg:''
  })
})
module.exports = router