const {User} = require("@/models/index");
const {Op, where} = require("sequelize");
const {successRes, failRes} = require('@/utils/response')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {SECRET} =require('@/const')
const login = async (req, res) => {
  const {account, password} = req.body
  if (!account) failRes(res, {msg: '账号不能为空'})
  if (!password) failRes(res, {msg: '密码不能为空'})
  const user = await User.findOne({
    where: {
      account
    }
  });
  if (!user) failRes(res, {msg: '账号不存在'})

  const isMatch = await bcrypt.compareSync(password, user.dataValues.password);

  if (!isMatch) failRes(res, {msg: '密码错误'})

  if (user.dataValues.status===0) failRes(res, {msg: '账号被禁用'})

  // 生成token
  const token = jwt.sign({
    id: String(user.dataValues.password.id),
  }, SECRET,{expiresIn: '1h'})

  successRes(res, {msg: '登录成功',token})
}

module.exports = {
  login
}