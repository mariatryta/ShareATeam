<template>
  <div class="link">
        <div v-for="(member, idx) in linked" :key="idx" class="card">
            <h1>{{ member.first.stringValue }} {{member.last.stringValue}}</h1>
             <p>{{member.role.stringValue}}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'sharing',
  data() {
      return {
          linkId:'',
      }
  },
  computed: {
    linked(){
        return this.$store.state.linked;
    }
  },
  beforeCreate(){
      this.linkId = this.$route.params.id;
      this.$store.dispatch('getData',this.linkId)
  }
}
</script>

<style scoped>
 
</style>

