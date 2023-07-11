import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
        keepAlive: true,
        requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
      path: '/',
      name: 'Index',
      meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
      },
      component: () => import('@/pages/index.vue')
  },
  {
    path: '/',
    name: 'Test',
    meta: {
        title: '测试',
        keepAlive: true,
        requireAuth: true
    },
    component: () => import('@/pages/test.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;