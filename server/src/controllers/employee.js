const {Employee} = require("@/models");
const {Op} = require("sequelize");
const list = async(req,res)=>{
  const {name, address, phone} = req.query
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
  const result = await Employee.findAll({
    where
  })
  res.send({
    code:0,
    data:result
  })
}

module.exports={
  list
}