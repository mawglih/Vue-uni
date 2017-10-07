<template>
    <div class="text-center title">
      <img id="img" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </div> 
</template>

<script>
export default {
    data: () => {
    return {
      msg:'VUE.JS Movies API'
        }
    }
}
</script>

<style scoped>
    #img {
        width: 90px;
        height: 90px;
        display: inline-block;
      }

      h1 {
        display: inline-block;
        font-family: 'Orbitron', sans-serif;
        margin: 0;
        padding: 0 0 0 1rem;
        font-size: 2.5rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        user-select: none;
      }
      .title {
          padding-top:30px;
      }
</style>
