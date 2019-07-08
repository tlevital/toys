<template>
    <section>
   <h3>Toys list:</h3>
   <ul v-if="toys">
      <toy-preview 
        v-for="(currToy, idx) in toys" 
        :toy="currToy" 
        :key="idx" >
      </toy-preview>
   </ul>
   </section>
</template>

<script>
import ToyPreview from './ToyPreview'

export default {
    name: 'toy-list',
    props: ['toys'],
    created() {
    },
    computed: {
    },
    methods: {
    },
    components:{
        ToyPreview
    }
}
</script>