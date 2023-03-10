const express = require('express')
const router = express.Router()
const asyncHandler = require("@/middlewares/asyncHandler");
const {login} = require('@/controllers/common')
router.post('/login', asyncHandler(login))

module.exports = router