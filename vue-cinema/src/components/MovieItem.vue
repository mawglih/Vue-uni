<template>
    <div class="row spacer">
        <div class="col-sm-12 col-md-6">
            <img :src="movie.Poster" :alt="movie.Title">
        </div>
        <div class="col-sm-12 col-md-6">
            <h2 class="poster-title">{{movie.Title}}</h2>
            <span class="rating">{{movie.Rated}}</span>
            <div class="row">
        <div class="col-sm-10">

            <div v-for="s in filteredSessions(sessions)" :key="s.time" class="time-slot">
              <div class="time-number">{{formatSessionTime(s.time)}}</div>
            </div>
        </div>
    </div>
        </div>    
    </div>
    



</template>

<script>
import moment from 'moment-timezone';
import times from '../assets/times';
export default {
    data() {
        return{

        }
    },
    props: ['movie', 'sessions', 'day', 'time'],
    methods: {
        formatSessionTime(raw) {
            return moment(raw).format('h:mm A');
        },
        filteredSessions(els) {
            return els.filter(this.sessionPassesTimeFilter);
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
    }
}
</script>

<style>
    .hr-list{
        height: 2px;
        background-color: gray;
    }
    .poster-title{
        color: yellow;
    }
    .spacer {
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: 1px gray solid;
    }
    .rating {
        color: white;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        background-color: #b50010;
        line-height: 1.5rem;
        padding: 0.3rem 0.5rem 0.2rem;
        font-weight: bold;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
    }
    .time-slot {
        border: 1px gray solid;
        background-color: darkgray;
        display: inline-block;
        margin-bottom:5px;
        margin-right:5px;
        padding:5px;
    }
    .time-number {
        font-size:120%;
        text-align:center;
        display: inline-block;
    }
    .time-slot:first-child {
        margin-top:5px;
    }
</style>
