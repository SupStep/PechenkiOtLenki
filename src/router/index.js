import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/catalog',
			name: 'catalog',
			component: () => import('../views/CatalogView.vue'),
		},

		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('../views/CartView.vue'),
		},
		{
			path: '/admin_POL',
			name: 'admin_POL',
			component: () => import('../views/AdminView.vue'),
		},
	],
	linkActiveClass: 'active-link',
})

export default router
