import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        meta: {
            className: 'page-homepage'
        },
        component: () => import('@/views/pages/homepage/template.vue')
    },
    {
        path: '/region/:slug',
        name: 'Region',
        meta: {
            className: 'page-region'
        },
        component: () => import('@/views/pages/view/region/template.vue')
    },
    {
        path: '/regions',
        name: 'Regions',
        meta: {
            className: 'page-regions'
        },
        component: () => import('@/views/pages/find/regions/template.vue')
    },
    {
        path: '/district/:slug',
        name: 'District',
        meta: {
            className: 'page-district'
        },
        component: () => import('@/views/pages/view/district/template.vue')
    },
    {
        path: '/category/:slug',
        name: 'Category',
        meta: {
            className: 'page-category'
        },
        component: () => import('@/views/pages/view/category/template.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: {
            className: 'page-categories'
        },
        component: () => import('@/views/pages/find/categories/template.vue')
    },
    {
        path: '/place/:slug',
        name: 'Place',
        meta: {
            className: 'page-place'
        },
        component: () => import('@/views/pages/view/place/template.vue')
    },
    {
        path: '/places',
        name: 'Places',
        meta: {
            className: 'page-places'
        },
        component: () => import('@/views/pages/find/places/template.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            className: 'page-about'
        },
        component: () => import('@/views/pages/about/template.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            className: 'page-contact'
        },
        component: () => import('@/views/pages/contact/template.vue')
    },
    {
        path: '/terms',
        name: 'TermsAndConditions',
        meta: {
            className: 'page-general'
        },
        component: () => import('@/views/pages/terms/template.vue')
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        meta: {
            className: 'page-general'
        },
        component: () => import('@/views/pages/privacy/template.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageError',
        meta: {
            className: 'page-error'
        },
        component: () => import('@/views/pages/errors/template.vue')
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
