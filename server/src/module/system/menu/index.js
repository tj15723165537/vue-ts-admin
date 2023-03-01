const express = require('express')
const router = express.Router()
const db = require('@/db')
router.get('/list', (req, res) => {
  const sql = `SELECT name,path,id,redirect,title,icon,pid from menu`
  const cb = (error, results) => {
    if (error) throw error;
    if (results) {
      let data = []
      results.map(item => {
        item.meta = {
          title: item.title,
          icon: item.icon
        }
        delete item.title
        delete item.icon
        if (item.pid === 0) {
          let children = []
          children = results.filter(i => {
            return i.pid === item.id
          })
          item.children = children
          data.push(item)
        }
      })
      res.send({
        code: 0,
        data
      })
    }
  }
  db.connect({sql, cb});
})
module.exports = router