import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login');
const index = r => require.ensure([], () => r(require('@/page/index/index')), 'index');
const routes = [
  {
    path:'/',
    component:login
  },
  {
    path:'/index',
    component:index
  }
];
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
