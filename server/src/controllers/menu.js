const {Menu} = require("@/models");
const {successRes, failRes} = require('@/utils/response')
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
  successRes(res,{data})
}
module.exports = {
  list
}