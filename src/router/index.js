import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta:{title:'首页',keepAlive: true},
    },

  ]
});
router.beforeEach((to, from, next) => {
  // document.title =  to.meta.title;
  next()
});
export default router
