<template>
  <div>
    <app-title></app-title>
     <div id="main" class="container">
      <div class="row">
        
          <app-movie-list :myMovies="myMovies" :genre="genre" :time="time" :sessions="sessions" :day="day"></app-movie-list>
          <app-movie-filter @check-filter="checkFilter"></app-movie-filter>
        
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from './MovieList.vue'
import MovieFilter from './MovieFilter.vue'
import Title from './Title.vue'
export default {
    props: ['myMovies', 'genre', 'time', 'sessions', 'day'],
    components: {
        appMovieList: MovieList,
        appMovieFilter: MovieFilter,
        appTitle: Title
    },
    methods:{
        checkFilter(category, title, checked) {
      if (checked){
        this[category].push(title);
      } else {
        let index = this[category].indexOf(title);
        if (index != -1) {
          this[category].splice(index, 1);
        }
      }
    }
    }

}
</script>

<style>

</style>
