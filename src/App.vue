<template>
  <div id="app">
    <NavBar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    NavBar,
  },
  mounted() {
    this.$store.dispatch('FetchProducts');
  },
})
export default class App extends Vue { }

</script>

<style>

</style>
