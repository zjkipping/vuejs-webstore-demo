import Cart from './views/Cart.vue';
import Checkout from './views/Checkout.vue';
import Home from './views/Home.vue';
import ProductDetails from './views/ProductDetails.vue';
import ProductList from './views/ProductList.vue';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/list', name: 'product-list', component: ProductList},
    { path: '/details/:id',  name: 'product-details',  component: ProductDetails, props: true },
    { path: '/cart',  name: 'cart',  component: Cart },
    { path: '/checkout',  name: 'checkout',  component: Checkout },
    { path: '*', redirect: '/home' },
  ],
});
