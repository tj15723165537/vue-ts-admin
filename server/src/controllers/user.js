const {User} = require("@/models/index");
const {Op} = require("sequelize");
const list = async (req, res) => {
  const {status, real_name, phone} = req.query
  const where = {}
  if (!!status) where.status = status
  if (!!real_name) {
    where.real_name = {
      [Op.like]: '%' + real_name + '%'
    }
  }
  if (!!phone) {
    where.phone = {
      [Op.like]: '%' + phone + '%'
    }
  }
  const result = await User.findAll({
    where
  })
  res.send({
    code: 0,
    data: result
  })
}
module.exports = {
  list
}