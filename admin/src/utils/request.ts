import axios from 'axios'
import {ElMessage} from 'element-plus'
import {Iuser} from "@/api/system/type";
import {useCommonStore} from "@/store/modules/common";

const store = useCommonStore()
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
  request.headers!.authorization = store.token
  return request
})
instance.interceptors.response.use(response => {
  return response
}, error => {
})


export interface Iresponse<T> {
  code: number,
  data?: T,
  msg?: string,
  token?: string,
  total?: number
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
        const errMsg = '网络错误'
        ElMessage.error(errMsg)
        reject(errMsg)
      } else {
        if (res.data.code !== 0) {
          const errMsg = res.data.msg || res.data.message || '意料之外的错误'
          return ElMessage.error(errMsg)
          reject(errMsg)
        }

        // 时间处理
        res.data && res.data.data && res.data.data.length && res.data.data.map((item:any) => {
          if (item.createdAt) {
            item.createdAt = new Date(item.createdAt!).toLocaleDateString()
          }
          if (item.updatedAt) {
            item.updatedAt = new Date(item.updatedAt!).toLocaleDateString()
          }
        })

        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
export default request
