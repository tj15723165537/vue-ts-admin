const express = require('express')
const router = express.Router()
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })
router.get('/user/list', (req, res) => {
  res.send('list')
})
module.exports = router