<template>
<div class="team">
    <div class="cards">
        <div v-for="(member, idx) in team" :key="idx" class="card">
            <h1>{{member.first }}</h1>
            <h2>{{member.last}}</h2>
            <p>{{member.role}}</p>
        </div>
    </div>
    <input v-model="generatedLink" type="text" id='link'> <button a v-on:click='generateUrl'>Generate Url</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            generatedLink:''
        }
    },
    computed: {
        team(){
             return  this.$store.state.team;   
        }
    },
    methods: {
        generateUrl: function(){
            this.generatedLink ='http://localhost:8080/sharing/' + this.$store.state.currentUser.uid; 
        
        }
    },
};
</script>

<style scoped>
    .card{
        border: 2px solid salmon;
        width: 15%;
        padding: 20px;
    }
    .cards{
        display: flex;
        margin: auto;
        width: 89%;
        flex-wrap: wrap;
    }
</style>

