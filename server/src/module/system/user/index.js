const express = require('express')
const router = express.Router()
const db = require('@/db')
router.get('/list', async (req, res) => {
  const sql = `SELECT realName,phone,id,status from user`
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