import axios from 'axios'
import {ElMessage} from 'element-plus'
import {Iuser} from "@/api/system/type";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
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
  return response
}, error => {
})


interface Iresponse<T> {
  code: number,
  data: T,
  msg: string
}

const request = <T>(option: option): Promise<Iresponse<T>> => {
  return new Promise((resolve, reject) => {
    const {url, method, data} = option
    instance({
      url,
      method,
      params: method?.toLowerCase() === 'post' ? null : data,
      data: method?.toLowerCase() === 'post' ? data : null
    }).then(res => {
      if (res.status !== 200) {
        ElMessage.error('网络错误')
      } else {
        if (res.data.code !== 0) {
          ElMessage.error(res.msg || res.message || '意料之外的错误')
        }
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
export default request
