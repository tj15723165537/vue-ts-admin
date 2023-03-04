const {User} = require("@/models/index");
const {Op, where} = require("sequelize");
const {successRes, failRes} = require('@/utils/response')
const bcrypt = require('bcryptjs');
const list = async (req, res) => {
  const {status, account, password, page, size} = req.query
  const where = {}
  if (!!status) where.status = status
  if (!!account) {
    where.account = {
      [Op.like]: '%' + account + '%'
    }
  }
  if (!!password) {
    where.password = {
      [Op.like]: '%' + password + '%'
    }
  }
  const offset = size * (page ? page - 1 : 0)
  const result = await User.findAll({
    attributes: ['id', 'account', 'status', 'createdAt', 'updatedAt'],
    where,
    offset,
    limit: parseInt(size)
  })
  const {count} = await User.findAndCountAll()
  successRes(res, {
    data: result,
    total: count
  })
}

const add = async (req, res) => {
  const {account, password} = req.body

  if (!account) failRes(res, {msg: '账号必填'})
  if (!password) failRes(res, {msg: '密码必填'})

  const salt = bcrypt.genSaltSync(10);
  const bcryptPassword = bcrypt.hashSync(password, salt);

  const obj = {
    ...req.body,
    id: new Date().getTime(),
    password:bcryptPassword
  }
  const result = await User.create(obj);
  if (result.id) {
    successRes(res, {msg: '添加成功'})
  } else {
    failRes(res, {msg: '添加失败'})
  }
}

const update = async (req, res) => {
  const {account, password, id} = req.body
  if (!account) failRes(res, {msg: '账号必填'})
  if (!password) failRes(res, {msg: '密码必填'})
  if (!id) failRes(res, {msg: 'id为空'})

  const salt = bcrypt.genSaltSync(10);
  const bcryptPassword = bcrypt.hashSync(password, salt);

  const obj = {
    ...req.body,
    password:bcryptPassword
  }

  const result = await User.update(obj, {where: {id}});
  if (result) {
    successRes(res, {msg: '编辑成功'})
  } else {
    failRes(res, {msg: '编辑失败'})
  }
}

const detail = async (req, res) => {
  const {id} = req.query
  const result = await User.findOne({
    where: {
      id
    }
  });
  if (result) {
    successRes(res, {data: result})
  } else {
    failRes(res, {msg: '获取失败'})
  }
}

const del = async (req, res) => {
  const {id} = req.query
  const result = await User.destroy({
    where: {
      id
    }
  });
  if (result) {
    successRes(res, {msg: '删除成功'})
  } else {
    failRes(res, {msg: '删除失败'})
  }
}

const updateStatus = async (req, res) => {
  const {status, id} = req.query
  const detail = await User.findOne({
    where: {
      id
    }
  });
  if (!detail.dataValues.id) failRes(res, {msg: '找不到该条数据'})
  const obj = {
    ...detail.dataValues,
    status
  }
  const result = await User.update(obj, {where: {id}});
  if (result) {
    successRes(res, {msg: '操作成功'})
  } else {
    failRes(res, {msg: '操作失败'})
  }
}

module.exports = {
  list,
  add,
  del,
  update,
  detail,
  updateStatus
}