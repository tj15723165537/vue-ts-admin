const express = require('express')
const router = express.Router()
const db = require('@/db')
router.get('/list', (req, res) => {
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