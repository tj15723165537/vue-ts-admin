import Mock from 'mockjs'
import type {employee} from "@/api/employee/type";

export interface IsearchParams extends employee {
  page?: number,
  size?: number
}

let dataList: employee[] = [
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

Mock.mock("/employee/employee/list", "get", (e): object => {
  const params = JSON.parse(e.body)
  let data = dataList
  const {name, phone, address, page = 1, size = 10} = params
  if (name) {
    data = data.filter(item => {
      return item.name?.includes(name)
    })
  }
  if (phone) {
    data = data.filter(item => {
      return item.phone?.includes(phone)
    })
  }
  if (address) {
    data = data.filter(item => {
      return item.address?.includes(address)
    })
  }
  return {
    data,
    msg: '',
    code: 0
  }
})

Mock.mock("/employee/employee/add", "post", (e): object => {
  const data = JSON.parse(e.body)
  dataList.push({
    ...data,
    id: new Date()
  })
  return {
    data: dataList,
    msg: '',
    code: 0
  }
})

Mock.mock("/employee/employee/edit", "post", (e): object => {
  const data = JSON.parse(e.body)
  const {id} = data
  dataList.splice(dataList.findIndex(item => item.id === id), 1, data)
  return {
    data: dataList,
    msg: '',
    code: 0
  }
})

Mock.mock("/employee/employee/del", "post", (e): object => {
  const id = JSON.parse(e.body).id
  dataList.splice(dataList.findIndex(item => item.id === id), 1)
  return {
    data: dataList,
    msg: '',
    code: 0
  }
})

Mock.mock("/employee/employee/detail", "post", (e): object => {
  const id = JSON.parse(e.body).id
  const data = dataList.find(item => item.id === id)
  return {
    data,
    msg: '',
    code: 0
  }
})
export default Mock
