import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入一级路由页面
import Home from "../views/Home"
import Menu from "../views/Menu"
import Admin from "../views/Admin"
import About from "../views/about/Index"
import Login from "../views/Login"
import Register from "../views/Register"

// 二级路由（关于我们页面）
import Contact from "../views/about/Contact"
import CookBook from "../views/about/CookBook"
import Delivery from "../views/about/Delivery"
import History from "../views/about/History"

// 三级路由
import Person from "../views/about/contact/Person"
import Phone from "../views/about/contact/Phone"

const router =  new Router({
	mode: 'history',  // HTML5的history模式
	routes: [
		{ path: '/', name: 'home', components: {
			default: Home,
			'cookBook':CookBook,
			'delivery':Delivery,
			'history':History
		  },
	 	},
		{ path: '/menu', name: 'menu', component: Menu },
		{ path: '/admin', name: 'admin', component: Admin},
		{ 
			path: '/about', name: 'about', component: About, redirect: { name:'delivery'},
			children: [
				{ path: '/about/cookBook', name: 'cookBook', component: CookBook },
				{ path: '/about/delivery', name: 'delivery', component: Delivery },
				{ path: '/about/history', name: 'history', component: History },
				{ 
					path: '/about/contact', name: 'contact', component: Contact, redirect: { name: 'phone' },
					children: [
						{ path: '/about/contact/person', name: 'person', component: Person },
						{ path: '/about/contact/phone', name: 'phone', component: Phone }
					]
				},
			] 
		},
		{ path: '/login', name: 'login', component: Login },
		{ path: '/register', name: 'register', component: Register },
		{ path: '*', redirect: '/' }
	]
})

export default router;