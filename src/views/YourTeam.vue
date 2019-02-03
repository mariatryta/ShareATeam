<template>
  <div class="yourteam">
    <team></team>
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
    this.$store.dispatch('getTeam',this.$store.state.currentUser.uid);
  },
  
};
</script>
