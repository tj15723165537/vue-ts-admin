import requset from '@/utils/request'
import type {Iuser} from './type'
import {RouteRecordRaw} from "vue-router";
export const getMenuList = (data:object) => {
    return requset<RouteRecordRaw[]>({
        url: '/system/menu/list',
        data
    })
}

export const getUserList = (data)=>{
    return requset<Iuser[]>({
        url: '/system/user/list',
        data
    })
}

export const addUser = (data: Iuser) => {
    return requset({
        url:'/system/user/add',
        method: 'post',
        data
    })
}

export const editUser = (data: Iuser) => {
    return requset({
        url:'/system/user/edit',
        method: 'post',
        data
    })
}

export const getUserDetail = (data) => {
    return requset<Iuser>({
        url: '/system/user/detail',
        method: 'post',
        data
    })
}

export const delUser = (data: object) => {
    return requset({
        url: '/system/user/del',
        method: 'post',
        data
    })
}
