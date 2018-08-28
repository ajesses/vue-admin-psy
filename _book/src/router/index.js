import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/city',
    component: Layout,
    redirect: '/city/citylist',
    name: 'City',
    meta: { title: '城市合伙人管理', icon: 'city' },
    children: [
      {
        path: 'citylist',
        name: 'CityList',
        component: () => import('@/views/city/cityList'),
        meta: { title: '城市合伙人信息', icon: 'table', roles: ['editor'] }
      },
      {
        path: 'addcity',
        name: 'addcity',
        component: () => import('@/views/city/addCity'),
        meta: { title: '添加城市合伙人', icon: 'add' }
      }
    ]
  },
  {
    path: '/region',
    component: Layout,
    redirect: '/region/regionlist',
    name: 'Region',
    meta: { title: '区域代理管理', icon: 'region' },
    children: [
      {
        path: 'regionlist',
        name: 'RegionList',
        component: () => import('@/views/region/regionList'),
        meta: { title: '区域代理信息', icon: 'table' }
      },
      {
        path: 'addregion',
        name: 'addregion',
        component: () => import('@/views/region/addRegion'),
        meta: { title: '添加区域代理', icon: 'add' }
      }
    ]
  },
  {
    path: '/education',
    component: Layout,
    redirect: '/education/educationlist',
    name: 'Education',
    meta: { title: '教育机构管理', icon: 'education' },
    children: [
      {
        path: 'educationlist',
        name: 'EducationList',
        component: () => import('@/views/education/educationList'),
        meta: { title: '教育机构信息', icon: 'table' }
      },
      {
        path: 'addeducation',
        name: 'addeducation',
        component: () => import('@/views/education/addEducation'),
        meta: { title: '添加教育机构', icon: 'add' }
      }
    ]
  },
  {
    path: '/student',
    component: Layout,
    redirect: '/student/studentlist',
    name: 'student',
    meta: { title: '学员管理', icon: 'student' },
    children: [
      {
        path: 'studentlist',
        name: 'StudentList',
        component: () => import('@/views/student/studentList'),
        meta: { title: '学员信息', icon: 'table' }
      },
      {
        path: 'studentscheme',
        name: 'studentscheme',
        component: () => import('@/views/student/studentScheme'),
        meta: { title: '学员方案', icon: 'scheme' }
      },
      {
        path: 'studentassess',
        name: 'studentassess',
        component: () => import('@/views/student/studentAssess'),
        meta: { title: '学员测评', icon: 'assess' }
      },
      {
        path: 'addstudent',
        name: 'addstudent',
        component: () => import('@/views/student/addStudent'),
        meta: { title: '添加学员', icon: 'add' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
