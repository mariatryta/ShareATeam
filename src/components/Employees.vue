<template>
  <div class="employees">
     <div class="flex">
        <div v-for="(member, idx) in team" :key="idx" class="card" v-on:click="addToTeam(member)">
                <h1>{{ member.name }} {{member.last}}</h1>
                <p>{{member.role}}</p>
        </div>
    </div>
    <!-- <div class="flex" v-show="!newTeam === undefined || !newTeam == 0"> >
        <div v-for="(member, idx) in newTeam" :key="idx" class="card">
                <h1>{{ member.name }} {{member.last}}</h1>
                <p>{{member.role}}</p>
        </div>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    team(){
        return this.$store.state.employees;
    }
  },
}
</script>

<style scoped>
    .flex{
        display:flex;
        align-items: center;
        flex-wrap: wrap;
        width:80%;
        margin: auto;
        justify-content: space-between;
    }
    .card{
        border: solid 2px rgb(96, 233, 126) ;
        width: 25%;
        margin: 10px 0;
    }
</style>

