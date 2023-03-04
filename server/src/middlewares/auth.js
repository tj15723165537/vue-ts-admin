const jwt = require("jsonwebtoken");
const {User} = require("@/models/index");
const {SECRET} = require('@/const')
const {successRes, failRes} = require('@/utils/response')
exports.protect = async (req, res, next) => {
  if (req.url === '/login') return next()
  if (!req.headers.authorization) {
    return failRes(res, {msg: '请先登录'})
  }

  const token = req.headers.authorization

  try {
    const decoded = jwt.verify(token, SECRET);
    const user = await User.findOne({
      attributes: ['id', 'account', 'status', 'createdAt', 'updatedAt'],
      where: {
        id: decoded.id,
      },
    });
    req.user = user;
    next();
  } catch (err) {
    return failRes(res, {msg: '请先登录'})
  }
};

exports.admin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  }
  return failRes(res, {msg: '没有管理员权限'})
};
