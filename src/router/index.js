import Vue from 'vue'
import Router from 'vue-router'
import {
  Main,
  Order,
  OrderHistory,
  RefundHistory,
  Statistics,
  Setting,
  Favorite,
  Auth,
  AddGoods,
  AddFavorite
} from "../components/Layout/";
import Hexagon from "@/components/Component/Hexagon"
import store from '../vuex/store'
Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if(store.state.customer.isAuth){
    console.log(store.state);
    return next();
  }
  next('/login');
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth,
      props: true
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/hex',
      name: 'Hexagon',
      component: Hexagon
    },
    {
      path: '/orderHistory',
      name: 'OrderHistory',
      component: OrderHistory,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/refundHistory',
      name: 'RefundHistory',
      component: RefundHistory,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/addGoods',
      name: 'AddGoods',
      component: AddGoods,
      props: true,
      beforeEnter: requireAuth()
    },
    {
      path: '/addFavorite',
      name: 'AddFavorite',
      component: AddFavorite,
      props: true,
      beforeEnter: requireAuth()
    }
  ]

})
