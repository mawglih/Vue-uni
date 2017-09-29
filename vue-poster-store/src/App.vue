<template>
    <div id="app">
    <app-header></app-header>
    <div class="main">
        <app-products :myItems="items"></app-products>
        <app-shopping-cart :cartTotal="total"></app-shopping-cart>
        
    </div>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';
import Products from './components/Products.vue';
import Header from './components/Header.vue';
export default {
  name: 'app',
  data () {
    return {
      total: 29.95,
      items: [
        {title: 'Item 1'},
        {title: 'Item 2'},
        {title: 'Item 3'},
      ]
    }
  },
  components:{
    appShoppingCart: ShoppingCart,
    appProducts: Products,
    appHeader: Header
  }
}
</script>

<style>

</style>
