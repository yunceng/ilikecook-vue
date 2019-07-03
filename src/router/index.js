import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/register.vue'

import Classification from '@/components/menuComponents/classification.vue'
// import Select from '@/components/menuComponents/selection.vue'
import menuClassDetail from '@/components/menuComponents/menuClassDetail.vue'
import Menu from '@/components/menuComponents/menu.vue'
import myWorks from '@/components/menuComponents/myWorks.vue'
import createMenu from '@/components/menuComponents/createMenu.vue'
import showSearchMenu from '@/components/menuComponents/showSearchMenu.vue'

import Detail from '@/components/common/menuDetail.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path : '/',
      redirect : '/home' // 重定向到首页
    },
    {
      path: '/home', // 首页
      name: 'Home',
      component: Home
    },
    {
      path: '/register',  // 注册
      name : 'Register',
      component: Register
    },
    {
      path: '/login',   // 登录
      name : 'Login',
      component: Login
    },
    {
      path: '/classification',   // 菜单
      name : 'classification',
      component : Classification
    },
    {
      path: '/menu',   // 分类菜谱主页面
      name : 'menu',
      component : Menu
    },
    {
      path: '/myWorks',   // 我的作品页面
      name : 'myworks',
      component : myWorks
    },
    // {
    //   path: '/select',
    //   name : 'select',
    //   component : Select
    // },
    {
      path: '/menuClassDetail/:id',  // 菜谱分类详情页面
      name : 'menuClassDetail',
      component : menuClassDetail
    },
    {
      path: '/createMenu',  // 创建菜谱
      name : 'createMenu',
      component : createMenu
    },
    {
      path : '/classification/detail/:id',  // 菜单详情页
      name : 'detail',
      component : Detail
    },
    {
      path : '/search/id',  // 搜索结果页面
      name : 'search',
      component : showSearchMenu
    }
  ]
})
