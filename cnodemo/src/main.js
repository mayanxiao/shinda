// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
Vue.use(VueResource);
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* eslint-disable no-new */

import top from './components/top.vue'
import list from './components/list.vue'
import bottom from './components/bottom.vue'
import sidebar from './components/sidebar.vue'
import topictext from './components/topictext.vue'
import topicon from './components/topicon.vue'
import signup from 'components/signup.vue'
import signin from 'components/signin.vue'

// const user = { template: '<div>{{ $route.params.id }}</div>'}
const router = new VueRouter({
	mode: 'history',
    base: __dirname,
    routes: [
	    {
			path: '/',
			components: {
				default: list,
				right: sidebar
			}
	    },
	    {
			path: '/topics/:id', 
			name: 'topic',
			component: topicon
		},
		{
			path: '/signup',
			name: 'signup',
			component: signup
		},
		{
			path: '/signin',
			name: 'signin',
			component: signin
		}
    ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

