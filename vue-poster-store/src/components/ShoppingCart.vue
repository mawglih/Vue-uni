<template>
  <div class="cart">
            <h2>Shopping Cart</h2>
            <ul v-for="cartItem in cart">
                <li class="cart-item">
                    <div class="item-title">{{cartItem.title}}</div>
                    <span>{{cartItem.price | currency}} x {{cartItem.qty}}</span>
                    <button class="btn" @click="increaseQuantity(cartItem)">+</button>
                    <button class="btn" @click="decreaseQuantity(cartItem)">-</button>
                </li>
            </ul>
            <div v-if="total">
                Total: {{total | currency}}
            </div>
            <div v-else>No items in the cart</div>
</div>
</template>
<script>
import { cartBus } from '../main.js'
export default {
  data: function(){
      return{
          cart: [],
          total: 0
      }
      
  },
  props: ['cartTotal'],
  created() {
      cartBus.$on('addItem', (cart, total) => {
        this.cart = cart;
        this.total = total;
        console.log('cart is ', this.cart, this.total);
      })
  },
  filters: {
      currency: function (price) {
        return '$'.concat(price.toFixed(2));
      }
  },
  methods: {
      increaseQuantity: function(item){
        for(var i = 0; i < this.cart.length; i++){
            if(this.cart[i].id == item.id){
                this.cart[i].qty++;
                this.total += item.price;
                break;
            }
        }
        cartBus.$emit('increaseQuantity', this.total, this.cart);
      },
      decreaseQuantity: function(item){
        for(var i = 0; i < this.cart.length; i++) {
            if(this.cart[i].id == item.id) {
                this.cart[i].qty--;
                this.total -= item.price;
                if(this.cart[i].qty == 0) {
                    this.cart.splice(i,1);
                    break;
                }
            }
        }
        cartBus.$emit('decreaseQuantity', this.total, this.cart);
      }
  }  
}
</script>

