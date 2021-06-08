import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Plugs from '../views/Plugs.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio,
	},
	{
		path: '/plugs',
		name: 'Plugs',
		component: Plugs,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
