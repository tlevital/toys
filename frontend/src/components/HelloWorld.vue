<template>
  <v-container>
    <h1>Welcome to TOY app!</h1>
<img class="img" src="https://images-na.ssl-images-amazon.com/images/I/71Qe3qN33iL._SY741_.jpg" >
      <router-view></router-view>
  </v-container>
</template>

<script>
  export default {
   
    // data(){
    // },
    
    props: {
    },
    computed: {
     
    }
  }
</script>

<style>
  img {
    height: 200px
  }
</style>