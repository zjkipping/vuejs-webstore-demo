<template>
  <div id="navbar">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/home">WebStore Demo</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/list" exact>Product List</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="loggedIn" to="/cart">Cart({{cartItemCount}})</b-nav-item>
          <b-nav-item v-if="loggedIn" v-on:click="logout">Logout</b-nav-item>
          <b-nav-item v-else v-on:click="login">Login</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { CartItem } from '../store';

@Component({
  computed: {
    ...mapState([
      'loggedIn',
    ]),
    cartItemCount() {
      let count = 0;
      this.$store.state.cart.forEach((item: CartItem) => {
        count += item.count;
      });
      return count;
    },
  },
  methods: {
    login() {
      this.$store.commit('SetLoggedIn', true);
    },
    logout() {
      this.$store.commit('SetLoggedIn', false);
    },
  },
})
export default class NavBar extends Vue { }

</script>

<style>

</style>
