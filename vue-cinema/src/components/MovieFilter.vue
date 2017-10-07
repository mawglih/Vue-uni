<template>
    <div class="col-sm-4">
        <div id="movie-filter">
            <h2>Filter Results</h2>
            <hr>
            <h3>By time of day</h3>
            <app-check-filter  v-for="time in times" category="time" :myTitle="time" @check-filter="checkFilter" :key="time"></app-check-filter>
            <hr>
            <h3>By genre</h3>
            <app-check-filter  v-for="genre in genres" category="genre" :myTitle="genre" @check-filter="checkFilter" :key="genre"></app-check-filter>
        </div>
    </div>
</template>

<script>
import genres from '../assets/genre';
import times from '../assets/times';
import CheckFilter from './CheckFilter.vue';
export default {
    data:() => {
        return {
            genres,
            times
        }
 
    },
    components: {
        appCheckFilter: CheckFilter
    },
    methods: {
        checkFilter(category, title, checked) {
            console.log('in movie filter ', category, title, checked);
            this.$emit('check-filter', category, title, checked);
        }
    }

}
</script>

<style>

</style>
