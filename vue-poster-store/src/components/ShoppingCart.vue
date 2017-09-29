<template>
  <div class="cart">
            <h2>Shopping Cart</h2>
            <div>
                Total: {{cartTotal}}
            </div>
</div>
</template>
<script>
export default {
  data: function(){
      return{
          
      }
      
  },
  props: ['cartTotal']
}
</script>

