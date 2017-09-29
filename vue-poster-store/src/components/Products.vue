<template>
  <div class="products">
    <div>
        <ul class="list-group" v-for="(i, index)  in myItems">
            <li class="list-group-item">
                <h4>{{i.title}}</h4>
                <button class="btn" @click="addItem(index)">Add to cart</button>
                </li>
        </ul>
    </div>
    
</div>
</template>
<script>
    export default {
        props:['myItems'],
        methods: {
            addItem: function(index) {
                console.log(index);
                console.log(this.myItems);
            }
        }
    }
</script>      
