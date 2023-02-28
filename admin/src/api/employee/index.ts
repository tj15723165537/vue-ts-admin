import requset from '@/utils/request'
import type {employee} from "@/api/employee/type";

export const getEmployeeList = (data: object) => {
    return requset<employee[]>({
        url: '/employee/employee/list',
        data
    })
}

export const addOrEditEmployee = (data: employee) => {
    const url = data.id ? '/employee/employee/edit' : '/employee/employee/add'
    return requset({
        url,
        method: 'post',
        data
    })
}

export const getEmployeeDetail = (data) => {
    return requset<employee>({
        url: '/employee/employee/detail',
        method: 'post',
        data
    })
}

export const delEmployee = (data: object) => {
    return requset({
        url: '/employee/employee/del',
        method: 'post',
        data
    })
}
