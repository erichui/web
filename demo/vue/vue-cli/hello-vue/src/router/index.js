import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/Header'

Vue.use(Router)

let routes = [
	{
		path: '/header',
		name: 'Header',
		components: Header
	}
]
export default new Router({
  routes
})
