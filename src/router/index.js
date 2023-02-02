import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        meta: {
            className: 'page-homepage'
        },
        component: () => import('@/views/pages/homepage.vue')
    },
    {
        path: '/region/:slug',
        name: 'Region',
        meta: {
            className: 'page-region'
        },
        component: () => import('@/views/pages/view-region.vue')
    },
    {
        path: '/regions',
        name: 'Regions',
        meta: {
            className: 'page-regions'
        },
        component: () => import('@/views/pages/find-regions.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: {
            className: 'page-categories'
        },
        component: () => import('@/views/pages/find-categories.vue')
    },
    {
        path: '/place/:slug',
        name: 'Place',
        meta: {
            className: 'page-place'
        },
        component: () => import('@/views/pages/view-place.vue')
    },
    {
        path: '/places',
        name: 'Places',
        meta: {
            className: 'page-places'
        },
        component: () => import('@/views/pages/find-places.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            className: 'page-about'
        },
        component: () => import('@/views/pages/about.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            className: 'page-contact'
        },
        component: () => import('@/views/pages/contact.vue')
    },
    {
        path: '/terms',
        name: 'TermsAndConditions',
        meta: {
            className: 'page-general'
        },
        component: () => import('@/views/pages/terms.vue')
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        meta: {
            className: 'page-general'
        },
        component: () => import('@/views/pages/privacy.vue')
    },
    {
        path: '/cookies',
        name: 'Cookies',
        meta: {
            className: 'page-general'
        },
        component: () => import('@/views/pages/cookies.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageError',
        meta: {
            className: 'page-error'
        },
        component: () => import('@/views/pages/error.vue')
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
