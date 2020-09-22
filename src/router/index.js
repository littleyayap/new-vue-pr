/* import router from 'vue-router'

Vue.use(router)

const routes = {

}

const router = new router({
  components:{
    routes,
    mode : 'history'
  }
}) 
export default router
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Sort = () => import('views/sort/sort.vue')
const Cart = () => import('views/cart/cart.vue')
const My = () => import('views/my/my.vue')
const Detail = () => import('views/detail/detail.vue')

Vue.use(VueRouter)

  const routes = [
  { 
	path: '/', 
	redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
	component: Sort
  },
  {
    path: '/cart',
    name: 'Cart',
	component: Cart
  },
  {
    path: '/my',
    name: 'My',
	component: My
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
	component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
