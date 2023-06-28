const routes = [{
  path: '/product',
  component: Vue.defineAsyncComponent(() => loadModule('./my-product.vue', options))
},
{
  path: '/signin',
  component: Vue.defineAsyncComponent(() => loadModule('./my-signin.vue', options))
},
{
  path: '/main',
  component: Vue.defineAsyncComponent(() => loadModule('./my-main.vue', options))
},
]

const router = VueRouter.createRouter({
history: VueRouter.createWebHashHistory(),
routes,
});