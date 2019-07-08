<template>

       <div class="toys-list">
        <li v-if="toy">
            {{toy.name}} |
            {{toy.price}} |
            {{toy.type}} |  
            <img class="toy-img" :src="toy.img"> 
            {{toy.createdAt | timeAgo}} |
        <button @click="emitDelete" title="delete toy">x</button> |
    <router-link :to="'/toy/edit/'+toy._id">Edit</router-link>
        </li>
        </div>
</template>

<script>

export default {
    name: 'toy-preview',
    props:['toy'],
    data () {
        return {
    }
    }
,
    methods:{
        emitDelete(){
            this.$parent.$emit('delete-toy', this.toy._id)
        }
    }
}
</script>

<style>
.toys-list{
    list-style-type: none;
    background-color: rgb(180, 167, 250);
    padding: 3px;
    border-bottom: 1px solid black;
    display:flex;
    justify-content: space-between;
    max-width: 500px;
    height: 100px;
    margin-bottom: 10px;
}
button{
        background-color: rgb(94, 83, 160);
        padding-left: 3px;
        padding-right: 3px;
}

.toy-img {
    height: 80px;
}
</style>