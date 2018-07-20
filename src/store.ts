import Vuex, { Store } from 'vuex';

import Vue from 'vue';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  cost: number;
}

export interface CartItem {
  product: Product;
  count: number;
}

export interface StoreState {
  products: Product[];
  cart: CartItem[];
  loggedIn: boolean;
  error: any;
}

Vue.use(Vuex);

const defaultProductState: Product[] = [];

const defaultCartState: CartItem[] = [];

const defaultStoreState: StoreState = {
  products: defaultProductState,
  cart: defaultCartState,
  loggedIn: false,
  error: undefined,
};

export default new Vuex.Store({
  state: defaultStoreState,
  getters: {
    products: (state) => {
      return state.products;
    },
    cart: (state) => {
      return state.cart;
    },
    loggedIn: (state) => {
      return state.loggedIn;
    },
    error: (state) => {
      return state.error;
    },
  },
  mutations: {
    AddToCart(state: StoreState, newItem: Product) {
      const existingIndex = state.cart.findIndex((i) => i.product.id === newItem.id);
      if (existingIndex !== -1) {
        const newCart = [...state.cart];
        const existingItem = newCart[existingIndex];
        newCart[existingIndex] = { ...existingItem, count: existingItem.count + 1 };
        Vue.set(state, 'cart', newCart);
      } else {
        Vue.set(state, 'cart', [...state.cart, { product: newItem, count: 1 }]);
      }
    },
    SubtractFromCart(state: StoreState, item: CartItem) {
      const index = state.cart.findIndex((i) => i.product.id === item.product.id);
      const newCart = [...state.cart];
      const existingItem = newCart[index];
      const newItem = { ...existingItem, count: existingItem.count - 1 };
      if (newItem.count <= 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index] = newItem;
      }
      Vue.set(state, 'cart', newCart);
    },
    RemoveFromCart(state: StoreState, item: CartItem) {
      const index = state.cart.findIndex((i) => i.product.id === item.product.id);
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      Vue.set(state, 'cart', newCart);
    },
    ClearCart(state: StoreState) {
      Vue.set(state, 'cart', []);
    },
    FetchProductListSuccess(state: StoreState, value: Product[]) {
      Vue.set(state, 'products', value);
    },
    FetchProductListFailure(state: StoreState, e: any) {
      Vue.set(state, 'error', e);
    },
    SetLoggedIn(state: StoreState, value: boolean) {
      Vue.set(state, 'loggedIn', value);
    },
  },
  actions: {
    async FetchProducts({ commit }) {
      try {
        const url = 'http://ec2-34-230-43-187.compute-1.amazonaws.com/products.json';
        const corsOverride = 'https://cors-anywhere.herokuapp.com/';
        const response = await axios.get(corsOverride + url);
        commit('FetchProductListSuccess', response.data);
      } catch (e) {
        commit('FetchProductListFailure', e);
      }
    },
  },
});
