const {Employee} = require("@/models");
const {Op} = require("sequelize");
const {successRes, failRes} = require('@/utils/response')
const list = async (req, res) => {
  const {name, address, phone, page, size} = req.query
  const where = {}
  if (!!name) {
    where.name = {
      [Op.like]: '%' + name + '%'
    }
  }
  if (!!phone) {
    where.phone = {
      [Op.like]: '%' + phone + '%'
    }
  }
  if (!!address) {
    where.address = {
      [Op.like]: '%' + address + '%'
    }
  }
  const offset = size * (page ? page - 1 : 0)
  const result = await Employee.findAll({
    where,
    offset,
    limit: parseInt(size)
  })
  const {count} = await Employee.findAndCountAll()
  successRes(res, {data: result, total: count})
}
const add = async (req, res) => {
  const {name, phone, address, date} = req.body
  if (!name) failRes(res, {msg: '姓名必填'})
  if (!phone) failRes(res, {msg: '手机号必填'})
  if (!date) failRes(res, {msg: '入职日期必填'})
  const obj = {
    ...req.body,
    id: new Date().getTime()
  }
  const result = await Employee.create(obj);
  if (result.id) {
    successRes(res, {msg: '添加成功'})
  } else {
    failRes(res, {msg: '添加失败'})
  }
}

const update = async (req, res) => {
  const {name, phone, id, address, date} = req.body
  if (!name) failRes(res, {msg: '姓名必填'})
  if (!phone) failRes(res, {msg: '手机号必填'})
  if (!date) failRes(res, {msg: '入职日期必填'})
  if (!id) failRes(res, {msg: 'id为空'})
  const obj = {
    ...req.body
  }
  const result = await Employee.update(obj, {where: {id}});
  if (result) {
    successRes(res, {msg: '编辑成功'})
  } else {
    failRes(res, {msg: '编辑失败'})
  }
}

const detail = async (req, res) => {
  const {id} = req.query
  const result = await Employee.findOne({
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
  const result = await Employee.destroy({
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

module.exports = {
  list,
  add,
  update,
  detail,
  del
}