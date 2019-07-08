<template>
  <v-app>
    <v-content>
  <router-view>   </router-view>
  
    </v-content>
  </v-app>
</template>

<script>
import ToyApp from '@/views/ToyApp.vue'

export default {
  name: 'App',
  components: {
    ToyApp
  },
  data () {
    return {
    }
  }
}
</script>
