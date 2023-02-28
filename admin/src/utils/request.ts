import axios from 'axios'
import {ElMessage} from 'element-plus'
import {Iuser} from "@/api/system/type";

const instance = axios.create({
  baseURL:'http://127.0.0.1:8080',
  timeout: 5000
});

interface option {
  url: string,
  method?: string,
  data?: object
}

instance.interceptors.request.use(request => {
  return request
})
instance.interceptors.response.use(response => {
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
    instance({
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
