<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Team</router-link> |
      <router-link to="/your-team">Your Team</router-link> |
      <router-link to="/login" id='login-btn' v-if="status == null">Login</router-link>
      <button id="signout" @click="logout" v-if="status != null">Sign Out</button>
    </div>
    <transition name="fade"  mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
const fb = require('./firebaseConfig.js')

export default {
  computed: {
    status(){
      return this.$store.state.currentUser
    }
  },
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/login')
      }).catch(err => {
          console.log(err)
      })
    }
  },
  mounted() {
    fb.auth.onAuthStateChanged((user) => {
      if (user) {
          console.log('User is logged in');
          this.$store.commit('setCurrentUser', user)
          this.$store.dispatch('fetchUserProfile')
      } else {
          console.log('User is not logged in.');
      }
    });
  },
}
</script>

<style>
body,html{
  margin: 0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1,h2{
   font-family: 'Oswald', sans-serif;
}
#nav {
  padding: 1.2em;
  background-color:#EB6982;
}

#nav a {
  font-weight: bold;
  color: #e2d8d8;
  font-size: 0.9em;
}

#nav a.router-link-exact-active {
  color: #edf1f0;
}
#nav a:hover{
  color: #edf1f0;
}
#signout{
  background-color: transparent;
  border: none;
  color:rgb(61, 61, 61);
  font-weight: bold;
  font-size: 0.9em;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
