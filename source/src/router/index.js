import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product',
        name: 'product.list',

        component: () => import('../views/product/List.vue')
    },
    {
        path: '/product/create',
        name: 'product.create',
        component: () => import('../views/product/From')
    },
    {
        path: '/users',
        name: 'users.list',
        component: () => import('../views/users/List.vue')
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: () => import('../views/users/From')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
