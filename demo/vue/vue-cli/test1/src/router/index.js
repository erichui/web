import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
      	{
      		path: '',
      		redirect: 'tab1'
      	},{
      		path: 'tab1',
      		name: 'tab1',
      		component: {
      			template: '<div>tab1Content</div>'
      		}
      	},{
      		path: 'tab2',
      		name: 'tab2',
      		component: {
      			template: '<div>tab2Content</div>'
      		}
      	},{
      		path: 'tab3',
      		name: 'tab3',
      		component: {
      			template: '<div>tab3Content</div>'
      		}
      	}
      ]
    }
  ]
})
