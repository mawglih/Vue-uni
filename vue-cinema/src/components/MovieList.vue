<template>
<div class="col-sm-8">
    <div v-if="filteredMovies.length">
        <app-movie-item v-for="movie in filteredMovies" :key="movie.Title" :movie="movie" :sessions="sessions" :day="day" :time="time"></app-movie-item>
    </div>
    <div v-else-if="myMovies.length">
        <h3>{{noResults}}</h3>
    </div>
    <div v-else>
        <h3>Loading...</h3>
    </div>
</div>
  
</template>

<script>
import MovieItem from './MovieItem.vue';
import moment from 'moment-timezone';
import times from '../assets/times';
export default {
    props: ['myMovies', 'genre', 'time', 'sessions', 'day'],
    methods: {
        moviePassesGenreFilter(movie) {
            if(!this.genre.length){
                return true;
            } else {
                let matched = true;
                let movArr = movie.Genre.split(", ");
                this.genre.forEach( el => {
                    if(movArr.indexOf(el) === -1){
                        matched = false
                    }
                });
                return matched;
            }
        },
        sessionPassesTimeFilter(session) {
            if(!this.day.isSame(moment(session.time), 'day')) {
                return false;
            } else if (this.time.length === 0 || this.time.length ===2) {
                return true;
            } else if (this.time[0] === times.AFTER_NOON) {
                return moment(session.time).hour() >= 17;
            } else {
                return moment(session.time).hour() < 17;
            }
        }
    },
    computed: {
        filteredMovies() {
            return this.myMovies
            .filter(this.moviePassesGenreFilter)
            .filter(movie => this.sessions.find(this.sessionPassesTimeFilter));
        },
        noResults() {
            let times = this.time.join(', ');
            let genre = this.genre.join(', ');
            return `No results for ${times}${times.length && genre.length ? ', ' : ''}${genre}`;
        }
    },
    components: {
        appMovieItem: MovieItem
    },
    creted() {
        console.lig(this.$moment);
    }
    

}
</script>

<style>
    .hr-list{
        height: 2px;
        background-color: gray;
    }
</style>
