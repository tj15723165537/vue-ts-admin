const express = require('express')
const router = express.Router()
const db = require('@/db')
router.get('/list', (req, res) => {
  const {name, phone, address} = req.query
  // const WHERE = `WHERE name=${name?name:''}`
  // const sql = `// SELECT name,phone,id,address,date from employee ${WHERE}`
  const sql = `SELECT name,phone,id,address,date from employee`
  const cb = (error, results) => {
    if (error) throw error;
    if (results) {
      res.send({
        code: 0,
        data: results
      })
    }
  }
  db.connect({sql, cb});
})
module.exports = router