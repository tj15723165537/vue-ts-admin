const {Menu} = require("@/models");

const list = async (req, res) => {
  const result = await Menu.findAll()
  const arr = result.map(item=>{
    return item.dataValues
  })
  let data = []
  arr.map(item => {
    item.meta = {
      title: item.title,
      icon: item.icon
    }
    delete item.title
    delete item.icon
    if (item.pid === 0) {
      let children = []
      children = arr.filter(i => {
        return i.pid === item.id
      })
      item.children = children
      data.push(item)
    }
  })
  res.send({
    code: 0,
    data
  })
}
module.exports = {
  list
}