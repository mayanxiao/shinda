// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
Vue.use(VueResource);
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* eslint-disable no-new */
const Foo = { template: '<div>bar</div>' }
const Nima = { template: '<div>nima</div>'}
const routes = [
     { path: '/foo', component: Foo },
     { path: '/nima', component: Nima}
]
const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
