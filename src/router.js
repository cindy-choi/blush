import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 지정되지 않은 path는 모두 404로 리다이렉트 한다.
    { path: '*', component: () => import('@/views/error/Error404') },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: {
        fullScreen: true,
      },
      children: [
      ],
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('./views/Intro'),
      meta: {
        fullScreen: true,
      },
    },
    {
      path: '/nea',
      name: 'nea',
      component: () => import('./views/NeaAdmin'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings'),
    },
    {
      path: '/labs',
      component: () => import('./views/Labs'),
      children: [
        {
          path: '/',
          name: 'parallel',
          component: () => import('./views/Labs/Parallel'),
          meta: {
            fullScreen: true,
          },
        },
        {
          path: '/nexr',
          name: 'nexr',
          component: () => import('./views/Labs/Nexr'),
          meta: {
            fullScreen: true,
          },
        },
        {
          path: '/interactive',
          name: 'interactive',
          component: () => import('./views/Labs/Interactive'),
          meta: {
            fullScreen: true,
          },
        },
      ],
    },
  ],
});

export default router;
