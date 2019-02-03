<template>
  <div class="home">
    <employees></employees>
  </div>
</template>

<script>
import Employees from '../components/Employees'
export default {
  name: 'home',
  components:{
    'employees': Employees
  },
  created() {
        this.$store.dispatch('getEmployees');
  },
}
</script>

<style>
 
</style>

