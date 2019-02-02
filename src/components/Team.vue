<template>
<div class="team">
    <div v-for="(member, idx) in team" :key="idx" class="card">
        <h1>{{member.first }}</h1>
        <h2>{{member.last}}</h2>
        <p>{{member.role}}</p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        team(){
             return  this.$store.state.team;   
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
    .team{
        display: flex;
        margin: auto;
        width: 89%;
        flex-wrap: wrap;
    }
</style>

