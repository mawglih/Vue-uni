<template>
 <div>
    <form action="" class="form form-inline" @submit.prevent="onSubmit">
        <input type="text" placeholder="Search for posters" class="form-control" v-model="search">
        <input type="submit" value="Search" class="btn btn-default">
    </form>
    <p>Found {{number}} results</p>
 </div>
</template>
<script>
const API_ID = 'faafcf56b66f9e0';
import axios from 'axios';
import { cartBus } from '../main.js'
export default {
    props:['number'],
    data: function(){
        return{
            search: '',
            results: [],
        }
    },
    // mounted() {
    //     axios.create({
    //         baseUrl:'https://api.imgur.com/3/',
    //         headers: { 'Authorization': 'Client-ID ' + API_ID }
    //     })
       
    // },
    methods: {
        onSubmit: function () {
        axios({
            method: 'get',
            //url:'https://api.imgur.com/3/gallery.json?'+this.search
            url:'https://api.imgur.com/3/gallery/hot/viral/0'
           // url: 'https://api.imgur.com/3/',
            //headers: { 'Authorization': 'Client-ID ' + API_ID }
        })
        .then(function(result){
            //console.log(result.data.data);
             
             cartBus.$emit('onSubmit', result.data.data);
             console.log('result in search ', result.data.data);
             var res = result.data.data;
        })
        .catch(function (error) {
            console.log(error);
        });
       
                        //return response.json();
                   
                    // .then(data => {
                    //     const resultArray = [];
                    //     for(let key in data) {
                    //         resultArray.push(data[key]);
                    //     }
                    //     this.users = resultArray;
                    
        }
    }
}
</script>

