<template>
  <div class="yourteam">
    <team></team>
    <p>That is your team</p>
  </div>
</template>

<script>
import Team from '../components/Team';

export default {
  name: 'yourteam',
  components: {
    team: Team,
  },
  created() {
    this.$store.dispatch('getTeam');
  },
  
};
</script>
