const express = require('express')
const mysql = require("mysql");
const router = express.Router()
const db = require('@/db/config')
router.get('/list', async (req, res) => {
  const sql = 'SELECT * from user'
  const cb = (error, results, fields) => {
    if (error) throw error;
    if (results) {
      res.send({
        code: 0,
        data: results,
        msg: ''
      })
    }
  }
  db.connect({sql, cb});
})
module.exports = router