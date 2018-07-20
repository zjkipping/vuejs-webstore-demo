<template>
  <div class="cart">
    <div v-if="loggedIn && cart.length > 0">
      <b-button class="mt-3 mb-2 float-right" variant="success" size="md" v-on:click="checkout">Checkout</b-button>
      <b-table  striped hover v-bind:fields="fields" v-bind:items="cart">
        <template slot="actions" slot-scope="data">
          <b-button-group class="mr-3 mb-3" size="sm">
            <b-button variant="success" v-on:click="addItem(data)">+</b-button>
            <b-button variant="danger" v-on:click="subtractItem(data)">&#x2212;</b-button>
          </b-button-group>
          <b-button class="mb-3" variant="danger" size="sm" v-on:click="removeItem(data)">Remove</b-button>
        </template>
      </b-table>
    </div>
    <p v-if="loggedIn && cart.length === 0">Cart is empty. Please add some items.</p>
    <p v-if="!loggedIn">Please Login to view your cart</p>
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
      'cart',
    ]),
  },
  data: () => {
    return {
      fields: [
        {
          key: 'product.name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'product.cost',
          label: 'Cost',
          sortable: true,
        },
        {
          key: 'count',
          label: 'Count',
          sortable: true,
        },
        'actions',
      ],
    };
  },
  methods: {
    addItem(data) {
      this.$store.commit('AddToCart', data.item.product);
    },
    subtractItem(data) {
      this.$store.commit('SubtractFromCart', data.item);
    },
    removeItem(data) {
      this.$store.commit('RemoveFromCart', data.item);
    },
    checkout() {
      this.$router.push('/checkout');
    },
  },
})
export default class Cart extends Vue { }
</script>
