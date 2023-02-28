import axios from 'axios'
import {ElMessage} from 'element-plus'
import {Iuser} from "@/api/system/type";

interface option {
  url: string,
  method?: string,
  data?: object
}

axios.interceptors.request.use(request => {
  // console.log(request)
  return request
})
axios.interceptors.response.use(response => {
  console.group('本次请求的路径是：' + response.config.url)
  console.log(response.data)
  console.groupEnd()
  return response.data
}, error => {
  console.log(error)
})


interface Iresponse<T> {
  code: number,
  data: T,
  msg: string
}

const request = <T>(option: option):Promise<Iresponse<T>> => {
  return new Promise((resolve, reject) => {
    const {url, method, data} = option
    axios({
      url,
      method,
      data
    }).then(res => {
      if (res.code !== 0) {
        ElMessage.error(res.msg)
      }
      resolve(res)
    }).catch(err => {
      ElMessage.error('请求失败')
      reject(err)
    })
  })
}

export default request
