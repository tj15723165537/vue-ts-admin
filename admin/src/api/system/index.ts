import requset from '@/utils/request'
import type {Iuser} from './type'
import {RouteRecordRaw} from "vue-router";

export const getMenuList = (data: object) => {
  return requset<RouteRecordRaw[]>({
    url: '/system/menu/list',
    data
  })
}

export const getUserList = (data:object) => {
  return requset<Iuser[]>({
    url: '/system/user/list',
    data
  })
}

export const addUser = (data: Iuser) => {
  return requset({
    url: '/system/user/add',
    method: 'post',
    data
  })
}

export const editUser = (data: Iuser) => {
  return requset({
    url: '/system/user/update',
    method: 'post',
    data
  })
}

export const getUserDetail = (id: number) => {
  return requset<Iuser>({
    url: '/system/user/detail',
    data: {
      id
    }
  })
}

export const delUser = (id: number) => {
  return requset({
    url: '/system/user/del',
    data: {
      id
    }
  })
}

export const updateUserStatus = (id: number, status: number) => {
  return requset({
    url: '/system/user/updateStatus',
    data: {
      id,
      status
    }
  })
}