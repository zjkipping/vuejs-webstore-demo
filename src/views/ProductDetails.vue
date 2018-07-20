<template>
  <div class="product-details">
    <h2 class="text-center mt-4">{{product.name}}</h2>
    <b-row v-if="product !== undefined">
      <b-col class="mt-4 text-center" cols="12" md="6">
        <b-row>
          <b-col cols="12" md="6">
            <b-img class="product-image" v-bind:src="product.image" fluid-grow alt="Product Image" />
          </b-col>
          <b-col cols="12" md="6" class="cart-add-container">
            <div class="cart-add text-center">
              <p v-if="!loggedIn">You must log in to add item to cart!</p>
              <b-button v-else variant="primary" v-on:click="addToCart">Add to Cart</b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="mt-4" cols="12" md="6">
        <p>{{product.description}}</p>
      </b-col>
    </b-row>
  </div>
</template>

<style>

  .product-image {
    max-width: 250px;
    min-width: 150px;
  }

  .cart-add {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .cart-add-container {
    position: relative;
    min-height: 60px;
    padding: 0;
  }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { Product } from '../store';

@Component({
  props: {
    id: {
      type: String,
    },
  },
  computed: mapState([
    'loggedIn',
  ]),
  data: () => {
    return {
      product: undefined,
    };
  },
  methods: {
    addToCart() {
      this.$store.commit('AddToCart', this.$data.product);
    },
  },
  created() {
    this.$data.product = this.$store.state.products.find((p: Product) => p.id === parseInt(this.$route.params.id, 10));
    if (!this.$data.product) {
      this.$router.push({ path: '/list' });
    }
  },
})
export default class ProductDetails extends Vue { }
</script>
