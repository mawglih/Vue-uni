<template>
  <div id="app" >
    <app-overview :myMovies="movies" :genre="genre" :time="time" :sessions="sessions" :day="day"></app-overview>
  </div>
</template>

<script>

import axios from 'axios';
import Overview from './components/Overview.vue'
import genres from './assets/genre';
import API_Sessions from './assets/api_sessions.json';
import moment from 'moment-timezone';
export default {
  data: () => {
    return {
      movies: [],
      genre: [],
      time: [],
      sessions: [],
      day: moment('2017-02-04')
    }
  },
  name: 'app',
  methods: {
    checkFilter(category, title, checked) {
      if (checked){
        this[category].push(title);
      } else {
        let index = this[category].indexOf(title);
        if (index != -1) {
          this[category].splice(index, 1);
        }
      }
      //console.log('checked in app', category, title, checked, this.genre);
    },
    
    // getMovies: () => {
    //   var IDS = ['tt0379225','tt1172203','tt1727587','tt1352852','tt1379199','tt1562881','tt0489037','tt1783305','tt4479976'];
    //   for(var i = 0; i < IDS.length; i++) {
    //     var id = IDS[i];
    //     axios({
    //         method: 'get',
    //         url:'http://www.omdbapi.com/?i=' + id + '&apikey=36f2fe97'
    //     })
    //     .then(function(result){
    //         var data = result;
    //         console.log('result ', data);
    //     })
    //     .catch(function (error) {
    //     });
    //   }
      
    // }
  },
  created() {
    var IDS = ['tt0379225','tt1172203','tt1727587','tt1352852','tt1379199','tt1562881','tt0489037','tt1783305','tt4479976'
];
    var arrayTemp = [];
      for(var i = 0; i < IDS.length; i++) {
        var id = IDS[i];
        var URL ='?i=' + id + '&apikey=36f2fe97';
        this.$http.get(URL).then(response => {
          this.movies.push(response.body);
          console.log(response);
        });
        
      }
      //console.log('array is ', arrayTemp);
      
    var arraySessions = [];
    this.$http.get('/src/assets/api_sessions.json').then(res => {
      this.sessions = res.body;
      //console.log(this.sessions);
    });
  },
  components: {
        appOverview: Overview
  }
}
</script>

<style lang="scss">
$mine-shaft: #3F3F3F;
$charcoal: #232323;


@mixin body-view {
  padding: 0 2rem;
}

$text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

$break-small: 800px;

body, html {
  width: 100%;
  height: 100%;
  background-color: $charcoal;
  color: white;
  padding: 0;
  margin: 0;

  #app {
    background-color: $mine-shaft;
    margin: 0 auto;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

}


</style>
