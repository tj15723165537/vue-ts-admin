import Mock from 'mockjs'
import type {Iuser} from "@/api/system/type";

let dataList: Iuser[] = [
  {
    id: 1,
    realName: '张三',
    phone: '13355559999',
    status: 1
  },
  {
    id: 2,
    realName: '李四',
    phone: '13344446666',
    status: 0
  }
]

Mock.mock("/system/user/list", "get", (e): object => {
  const params = JSON.parse(e.body)
  let data = dataList
  const {realName, phone, status, page = 1, size = 10} = params
  if (realName) {
    data = data.filter(item => {
      return item.realName?.includes(realName)
    })
  }
  if (phone) {
    data = data.filter(item => {
      return item.phone?.includes(phone)
    })
  }
  if (status!==undefined) {
    data = data.filter(item => {
      return item.status === status
    })
  }

  return {
    data,
    msg: '',
    code: 0
  }
})

Mock.mock("/system/user/add", "post", (e): object => {
  const data = JSON.parse(e.body)
  dataList.push({
    ...data
  })
  return {
    msg: '',
    code: 0
  }
})

Mock.mock("/system/user/edit", "post", (e): object => {
  const data = JSON.parse(e.body)
  const {id} = data
  dataList.splice(dataList.findIndex(item => item.id === id), 1, data)
  return {
    msg: '',
    code: 0
  }
})

Mock.mock("/system/user/del", "post", (e): object => {
  const id = JSON.parse(e.body).id
  dataList.splice(dataList.findIndex(item => item.id === id), 1)
  return {
    msg: '',
    code: 0
  }
})

Mock.mock("/system/user/detail", "post", (e): object => {
  const id = JSON.parse(e.body).id
  const data = dataList.find(item => item.id === id)
  return {
    data,
    msg: '',
    code: 0
  }
})
export default Mock
