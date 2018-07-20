<template>
  <div class="home">
    <h1 class="text-center">Webstore Demo Home Page</h1>
    <p class="text-center">
      Try logging in and going to the product list page! <br>
      Once there you can go to the details and add an item to your cart. <br>
      You can view your cart in the upper right, while logged in, and view the table by clicking on it. <br>
      Once in the cart you can add/subtract/remove items or checkout!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue { }
</script>
