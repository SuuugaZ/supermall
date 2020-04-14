import Vue from 'vue'
import VueRouter from 'vue-router'

//模块需要懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

//1、安装插件
Vue.use(VueRouter)

//2、创建router
const routes = [
	//为组件(模块)配置映射关系 path,conpponent	
	{path: '',redirect: '/home'}, //默认的当前路径
	{path:'/home',component: Home},
	{path: '/category',component: Category},
	{path: '/cart',component: Cart},
	{path: '/profile',component: Profile},
	{path: '/detail/:id', component: Detail}
]
const router = new VueRouter({
	//路由
	routes,
	//模式
	mode: 'history'
})

export default router