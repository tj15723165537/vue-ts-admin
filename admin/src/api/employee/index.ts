import requset from '@/utils/request'
import type {employee} from "@/api/employee/type";

export const getEmployeeList = (data: object) => {
  return requset<employee[]>({
    url: '/employee/employee/list',
    data
  })
}

export const addEmployee = (data: employee) => {
  return requset({
    url: '/employee/employee/add',
    method: 'post',
    data
  })
}

export const editEmployee = (data: employee) => {
  return requset({
    url: '/employee/employee/update',
    method: 'post',
    data
  })
}

export const getEmployeeDetail = (id: number) => {
  return requset<employee>({
    url: '/employee/employee/detail',
    data: {
      id
    }
  })
}

export const delEmployee = ( id: number) => {
  return requset({
    url: '/employee/employee/del',
    data:{
      id
    }
  })
}
