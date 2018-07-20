<template>
  <div class="product-list">
    <b-row class="mt-4">
      <b-col class="mb-3" cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
        <b-card
          v-bind:title="product.name"
          bg-variant="dark"
          text-variant="white"
          class="text-center mx-auto product-card"
          v-bind:img-src="product.image"
          img-alt="Image"
          img-top
        >
          <p class="card-text">
            ${{ product.cost }}
          </p>
          <b-button v-bind:to="'/details/' + product.id" variant="primary">Details</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style>

  .product-card {
    max-width: 325px;
  }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState([
    'products',
  ]),
})
export default class ProductList extends Vue { }
</script>
