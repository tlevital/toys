import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatNum', val =>{
    return val.toLocaleString();
})

Vue.filter('timeAgo', ms =>{
    return moment(ms).fromNow()
})