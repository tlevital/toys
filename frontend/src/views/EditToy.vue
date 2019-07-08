<template>
<section class="edit-toy">
    <h1>Edit</h1>
    <section>
        <form @submit.prevent="saveToy">
            <input type="text" v-model="toy.name" placeholder="Item Name" />
            <input type="number" v-model.number="toy.price" placeholder="Price" />
            <input type="text" v-model="toy.type" placeholder="type" />
            <button :disabled="isSaving">Save</button>
        </form>
    </section>
    
</section>
</template>
<script>
import ToyService from '../services/ToyService.js'
export default {
    data() {
        return {
            toy: {name: '', price: 0, type:''},
            isSaving: false
        }
    },
    created() {
        const toyId = this.$route.params.id;
        // console.log('toyId at Edit toy:', toyId);
        if (toyId) {
            ToyService.getById(toyId)
                .then(toy => { this.toy = toy})
        }
    },

    methods: {
        saveToy() {
            // console.log('saved pushed at EditToy');
            var prm = this.$store.dispatch({type: 'saveToy', toy: this.toy}) 
            prm.then((savedToy)=>{
                this.toy = {}
                this.$router.push('/toy') 
            })
        }
    }
}
  </script>