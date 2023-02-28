import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {getMenuList} from "@/api/system";

const contactRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/view/login/index.vue')
    },
    {
        path: '/',
        name:'home',
        redirect: '/home',
        component: () => import('@/layout/index.vue'),
        children: [{
            path: '/home',
            meta: {
                title: '首页',
                icon: 'home'
            },
            component: () => import('@/view/home/index.vue'),
        }]
    },
]



export const router = createRouter({
    history: createWebHistory(),
    routes: contactRoutes
})
router.addRoute(  {
    path: '/employee',
    redirect: '/employee/employee',
    component: () => import('@/layout/index.vue'),
    meta: {
        title: '员工管理',
        icon: 'employee'
    },
    children: [
        {
            path: 'employee',
            component: () => import('@/view/employee/employee/index.vue'),
            meta: {
                title: '员工管理',
                icon: 'employee'
            }
        }]
})
router.addRoute( {
        path: '/system',
        redirect: '/system/user',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '系统管理',
            icon: 'system'
        },
        children: [
            {
                path: '/system/user',
                component: () => import('@/view/system/user/index.vue'),
                meta: {
                    title: '用户管理',
                    icon: 'user'
                },
            }]
    },)
// router.beforeEach(async (to,from,next)=>{
//     const result: RouteRecordRaw = await getMenuList({}) as RouteRecordRaw
//     router.addRoute(result)
//     next()
// })