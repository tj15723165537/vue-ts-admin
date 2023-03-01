let dataList = [
  {
    id: 1,
    name: '张三',
    phone: '13355559999',
    date: new Date(),
    address: '重庆市渝中区大坪',
  },
  {
    id: 2,
    name: '李四',
    phone: '13344446666',
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    address: '重庆市渝中区朝天门'
  }
]
module.exports = dataList