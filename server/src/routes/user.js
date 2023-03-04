const express = require('express')
const router = express.Router()
const asyncHandler = require("@/middlewares/asyncHandler");
const {list,add,del,update,detail,updateStatus} = require('@/controllers/user')
router.get('/list', asyncHandler(list))
router.post('/add', asyncHandler(add))
router.get('/del', asyncHandler(del))
router.post('/update', asyncHandler(update))
router.get('/detail', asyncHandler(detail))
router.get('/updateStatus', asyncHandler(updateStatus))
module.exports = router