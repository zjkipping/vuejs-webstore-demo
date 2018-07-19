<template>
  <div class="product-details">
    <h1>Product Details View</h1>
    <p>{{id}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    id: {
      type: String,
    },
  },
})
export default class ProductDetails extends Vue { }
</script>
