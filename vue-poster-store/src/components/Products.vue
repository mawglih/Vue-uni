<template>
  <div class="products">
    <div>
        <ul class="list-group" v-for="(i, index)  in myItems">
            <li class="list-group-item product">
                <div class="row">
                    <div class="col-md-6">
                        <img :src="i.link" class="product-image" style="border:1px solid black;">
                    </div>
                    <div class="col-md-5 offset-md-1 col">
                        <h5 class="pull-right">{{i.title}}</h5>
                        <p>Price: <strong>{{ price | currency }}</strong></p>
                        <button class="btn" @click="addItem(i, index)">Add to cart</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    
</div>
</template>
<script>
import { cartBus } from '../main.js';
    export default {
        data: function () {
            return {
                cart: [],
                total: 0,
                price: 9.99
            }
        },
        props:['myItems'],
        filters: {
            currency: function (price) {
            return '$'.concat(price.toFixed(2));
            }
        },
        methods: {
            addItem: function(i,index) {
                var found = false;
                for( var k = 0; k < this.cart.length; k++) {
                    if (this.cart[k].id === i.id) {
                        found = true;
                        this.cart[k].qty++;
                    }
                }
                if(!found) {
                    this.cart.push({
                    id: i.id,
                    title: i.title,
                    price: this.price,
                    qty: 1
                    });
                }
                
                this.total += this.price;
                cartBus.$emit('addItem', this.cart, this.total);
            }
        },
        changed() {
            cartBus.$on('decreaseQuantity', (cart, total) => {
                this.cart = cart;
                this.total = total;
            });
            cartBus.$on('inecreaseQuantity', (cart, total) => {
                this.cart = cart;
                this.total = total;
            });
        }
    }
</script>      
