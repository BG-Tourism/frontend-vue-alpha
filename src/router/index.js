import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    meta: {
      className: 'page-homepage',
    },
    component: () => import('@/views/pages/homepage.vue'),
  },
  {
    path: '/my',
    meta: {
      className: 'page-general',
    },
    component: () => import('@/views/pages/my/index.vue'),
    children: [
      {
        path: 'settings',
        meta: {
          className: 'page-general',
        },
        component: () => import('@/views/pages/my/settings/index.vue'),
        children: [
          {
            path: 'profile',
            name: 'MyProfile',
            meta: {
              pageCategory: 'settings',
              pageName: 'profile',
              className: 'page-general',
            },
            component: () => import('@/views/pages/my/settings/profile/index.vue'),
          },
          {
            path: 'security',
            name: 'MySecurity',
            meta: {
              pageCategory: 'settings',
              pageName: 'security',
              className: 'page-general',
            },
            component: () => import('@/views/pages/my/settings/security/index.vue'),
          },
        ],
      },
      {
        path: 'content',
        meta: {
          className: 'page-general',
        },
        component: () => import('@/views/pages/my/content/index.vue'),
        children: [
          {
            path: 'trips',
            meta: {
              className: 'page-general',
            },
            component: () => import('@/views/pages/my/content/trips/index.vue'),
            children: [
              {
                path: 'list',
                name: 'MyTrips',
                meta: {
                  pageCategory: 'content',
                  pageName: 'tripsList',
                  className: 'page-general',
                },
                component: () => import('@/views/pages/my/content/trips/list/index.vue'),
              },
              {
                path: 'create',
                name: 'MyTripsCreate',
                meta: {
                  pageCategory: 'content',
                  pageName: 'tripsCreate',
                  className: 'page-general',
                },
                component: () => import('@/views/pages/my/content/trips/create/index.vue'),
              },
            ],
          },
          {
            path: 'photos',
            meta: {
              className: 'page-general',
            },
            component: () => import('@/views/pages/my/content/photos/index.vue'),
            children: [
              {
                path: 'list',
                name: 'MyPhotos',
                meta: {
                  pageCategory: 'content',
                  pageName: 'photosList',
                  className: 'page-general',
                },
                component: () => import('@/views/pages/my/content/photos/list/index.vue'),
              },
              {
                path: 'upload',
                name: 'MyPhotosUpload',
                meta: {
                  pageCategory: 'content',
                  pageName: 'photosUpload',
                  className: 'page-general',
                },
                component: () => import('@/views/pages/my/content/photos/upload/index.vue'),
              },
            ],
          },
          {
            path: 'reviews',
            name: 'MyReviews',
            meta: {
              pageCategory: 'content',
              pageName: 'reviewsList',
              className: 'page-general',
            },
            component: () => import('@/views/pages/my/content/reviews/list/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/legal',
    component: () => import('@/views/pages/legal/index.vue'),
    children: [
      {
        path: 'cookie-policy',
        name: 'CookiePolicy',
        meta: {
          className: 'page-general',
        },
        component: () => import('@/views/pages/legal/cookie-policy/index.vue'),
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicy',
        meta: {
          className: 'page-general',
        },
        component: () => import('@/views/pages/legal/privacy-policy/index.vue'),
      },
      {
        path: 'terms-of-service',
        name: 'TermsOfService',
        meta: {
          className: 'page-general',
        },
        component: () => import('@/views/pages/legal/terms-of-service/index.vue'),
      },
    ],
  },
  {
    path: '/region/:slug',
    name: 'Region',
    meta: {
      className: 'page-region',
      category: 'regions',
    },
    component: () => import('@/views/pages/view-region.vue'),
  },
  {
    path: '/regions',
    name: 'Regions',
    meta: {
      className: 'page-regions',
    },
    component: () => import('@/views/pages/find-regions.vue'),
  },
  {
    path: '/category/:slug',
    name: 'Category',
    meta: {
      className: 'page-category',
      category: 'categories',
    },
    component: () => import('@/views/pages/view-category.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      className: 'page-categories',
    },
    component: () => import('@/views/pages/find-categories.vue'),
  },
  {
    path: '/place/:slug',
    name: 'Place',
    meta: {
      className: 'page-place',
      category: 'places',
    },
    component: () => import('@/views/pages/view-place.vue'),
  },
  {
    path: '/places',
    name: 'Places',
    meta: {
      className: 'page-places',
    },
    component: () => import('@/views/pages/find-places.vue'),
  },
  {
    path: '/@:slug',
    name: 'User',
    meta: {
      className: 'page-user',
      category: 'user',
    },
    component: () => import('@/views/pages/view-user.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      className: 'page-about',
    },
    component: () => import('@/views/pages/about.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      className: 'page-contact',
    },
    component: () => import('@/views/pages/contact.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageError',
    meta: {
      className: 'page-error',
    },
    component: () => import('@/views/pages/error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return (
      savedPosition
            || new Promise((resolve) => {
              setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 200)
            })
    )
  },
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
