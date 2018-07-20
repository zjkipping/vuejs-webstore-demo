<template>
  <div class="checkout">
    <div v-if="loggedIn && cart.length > 0">
      <h3 class="mt-3 mb-3">Total Cost: ${{totalCost}}</h3>
      <b-form @submit="onSubmit($event)">
        <b-form-group id="NameLabel"
                      label="Your Full Name:"
                      label-for="Name">
          <b-form-input id="Name"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter Full Name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="NameLabel"
                      label="Your Email:"
                      label-for="Name">
          <b-form-input id="Email"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter Email">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
    <p v-if="loggedIn && cart.length === 0">Please add items to your cart before checking out!</p>
    <p v-if="!loggedIn">Please Login to checkout.</p>
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
    totalCost() {
      let total = 0;
      this.$store.state.cart.forEach((item: CartItem) => {
        total += item.product.cost
      });
      return total;
    },
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit('ClearCart');
      this.$router.push('/home');
    },
  },
})
export default class Checkout extends Vue { }
</script>
