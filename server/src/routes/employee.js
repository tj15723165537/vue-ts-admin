const express = require('express')
const router = express.Router()
const asyncHandler = require("@/middlewares/asyncHandler");
const {list, add, update, detail, del} = require('@/controllers/employee')

router.get('/list', asyncHandler(list))
router.post('/add', asyncHandler(add))
router.post('/update', asyncHandler(update))
router.get('/detail', asyncHandler(detail))
router.get('/del', asyncHandler(del))

module.exports = router