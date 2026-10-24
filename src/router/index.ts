import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DocsView from '@/views/DocsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/docs/:id?',
      name: 'docs',
      component: DocsView,
    },
    {
      path: '/blocks/:id?',
      name: 'blocks',
      component: () => import('@/views/BlocksView.vue'),
    },
    {
      path: '/preview/block/:id?',
      name: 'block-preview',
      component: () => import('@/views/BlockStandalonePreview.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // 在文档中心或场景区块内部切换不同项时，保持视口滚动位置，避免粗暴瞬跳到顶部
    if ((to.name === 'docs' && from.name === 'docs') || (to.name === 'blocks' && from.name === 'blocks')) {
      return false
    }
    return { top: 0 }
  },
})

export default router
