<template>
<section>
  <br>
    <router-link  to="/toy/edit">Add new toy</router-link>
    <toy-list :toys="toysQuery" @delete-toy="deleteToy">
    </toy-list>
  </section>
</template>

<script>
import ToyList from '../components/ToyList'
import ToyPreview from '../components/ToyPreview'

// import ToyPreview from '../components/ToyPreview.vue'
export default {
    name: 'toy-app',
     created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    computed: {
        toysQuery() {
            return this.$store.getters.toysToShow
    }
    },
    methods: {
        deleteToy(toyId) {
            // console.log('toy ID to delete:', toyId);
            this.$store.dispatch({type: 'deleteToy', toyId})
        },
    },
    components:{
        ToyList,
        ToyPreview
    }
}
</script>
