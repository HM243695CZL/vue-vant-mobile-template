import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
        component: () => import('@/views/Home')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
