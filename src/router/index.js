import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        meta: {
            className: 'page-homepage'
        },
        component: () => import(/* webpackChunkName: 'homepage' */ '@/views/pages/homepage/template.vue')
    },
    {
        path: '/category/:category',
        name: 'Category',
        meta: {
            className: 'page-category'
        },
        component: () => import(/* webpackChunkName: 'category' */ '@/views/pages/category/template.vue')
    },
    {
        path: '/place/:slug',
        name: 'Place',
        meta: {
            className: 'page-place'
        },
        component: () => import(/* webpackChunkName: 'place' */ '@/views/pages/place/template.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            className: 'page-about'
        },
        component: () => import(/* webpackChunkName: 'about' */ '@/views/pages/about/template.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            className: 'page-contact'
        },
        component: () => import(/* webpackChunkName: 'contact' */ '@/views/pages/contact/template.vue')
    },
    {
        path: '/terms',
        name: 'TermsAndConditions',
        meta: {
            className: 'page-general'
        },
        component: () => import(/* webpackChunkName: 'general' */ '@/views/pages/terms/template.vue')
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        meta: {
            className: 'page-general'
        },
        component: () => import(/* webpackChunkName: 'general' */ '@/views/pages/privacy/template.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageError',
        meta: {
            className: 'page-error'
        },
        component: () => import(/* webpackChunkName: 'error-404' */ '@/views/pages/errors/template.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => {
        return (
            savedPosition ||
            new Promise((resolve) => {
                setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 200)
            })
        )
    },
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()

    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
