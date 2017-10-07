<template>
  <div >
      <input type="checkbox" name="myTitle" id=""@click="checkFilter">
      {{myTitle}}
  </div>
</template>

<script>

export default {
    data: () => {
        return {
            checked: false
        }
    },
    props: ['myTitle', 'category'],
    methods: {
        checkFilter() {
            this.checked = !this.checked;
            this.$emit('check-filter', this.category, this.myTitle, this.checked);
        }
    }

}
</script>

<style>

</style>
