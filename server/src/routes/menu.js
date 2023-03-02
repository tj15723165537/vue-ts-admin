const express = require('express')
const router = express.Router()
const {list} = require('@/controllers/menu')
router.get('/list', list)
module.exports = router
// (req, res) => {

  // const cb = (error, results) => {
  //   if (error) throw error;
  //   if (results) {
  //
  //     })
  //     res.send({
  //       code: 0,
  //       data
  //     })
  //   }
  // }
// }