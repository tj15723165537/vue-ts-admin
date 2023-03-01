const dataList = [
  {
    name: "home",
    path: "/home",
    redirect: '/home',
    meta: {
      title: "首页",
      icon: "shouye"
    },
    children: []
  },
  {
    name: "system",
    path: "/system",
    redirect: '/system/user',
    meta: {
      title: "系统管理",
      icon: "system"
    },
    children: [
      {
        name: "user",
        path: "/system/user",
        redirect: 'user',
        meta: {
          title: "用户管理",
          icon: "user"
        },
        children: []
      }
    ]
  },
  {
    name: "employee",
    path: "/employee",
    redirect: '/employee',
    meta: {
      title: "员工管理",
      icon: "employee"
    },
    children: [
      {
        name: "employee",
        path: "/employee/employee",
        redirect: 'employee',
        meta: {
          title: "员工管理",
          icon: "employee"
        },
        children: []
      }
    ]
  }
]
module.exports = dataList