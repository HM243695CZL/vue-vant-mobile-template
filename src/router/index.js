import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const tabBar = () => import('@/components/tabBar')
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/login/register',
        name: 'Register',
        component: () => import('@/views/login/register/index')
    },
    {
        path: '/login/forget-pass',
        name: 'ForgetPass',
        component: () => import('@/views/login/forgetPass/index')
    },
    {
        path: '/home',
        name: 'Home',
        components: {
            default: () => import('@/views/home/index'),
            tabBar: tabBar
        }
    },
    {
        path: '/category',
        name: 'Category',
        components: {
            default: () => import('@/views/category/index'),
            tabBar: tabBar
        }
    },
    {
      path: '/enter-name',
      name: 'EnterName',
      components: {
          default: () => import('@/views/enterName/index'),
          tabBar: tabBar
      }
    },
    {
        path: '/news',
        name: 'News',
        components: {
            default: () => import('@/views/news/index'),
            tabBar: tabBar
        }
    },
    {
        path: '/platform',
        name: 'Platform',
        components: {
            default: () => import('@/views/platform/index'),
            tabBar: tabBar
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
