<template>
    <div id="app">
    <app-header></app-header>
    <app-search-bar :number="resultNumber"></app-search-bar>
    <div class="main">
        <app-products :myItems="items"></app-products>
        <app-shopping-cart ></app-shopping-cart>
        
    </div>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';
import Products from './components/Products.vue';
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue';
import { cartBus } from './main.js'
export default {
  name: 'app',
  data () {
    return {
      items: [],
      resultNumber: 0
    }
  },
  components:{
    appShoppingCart: ShoppingCart,
    appProducts: Products,
    appHeader: Header,
    appSearchBar: SearchBar
  },
  methods: {
    updateCart: function() {

    }
  },
  created() {
    cartBus.$on('onSubmit', (results) => {
      console.log('results in App ', results);
      this.items = results;
      this.resultNumber = this.items.length;
      console.log('number of searches ', this.resultNumber);
    });
  }
}
</script>

<style>

</style>
