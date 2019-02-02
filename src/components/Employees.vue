<template>
  <div class="employees">
     <div class="flex">
        <div v-for="(employee, idx) in employees" :key="idx" class="card" v-on:click="addToTeam(employee)">
                <h1>{{ employee.data.first }} {{employee.data.last}}</h1>
                <p>{{employee.data.role}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    employees(){
        return this.$store.state.employees;
    }
  },
  methods: {
      addToTeam(employee){
          this.$store.dispatch('addMembertoTeam', employee)
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

