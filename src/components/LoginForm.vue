<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click.prevent="login()">Login</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      input: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
        fb.auth.signInWithEmailAndPassword(this.input.email, this.input.password).then(user => {
            this.$store.commit('setCurrentUser', user)
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/team') //new route
        }).catch(err => {
            console.log(err)
        })
    }
  },
};
</script>

<style scoped>
#login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 10px;
        padding: 20px;
    }
#login button{
    margin: 20px;
  background-color: transparent;
  border: solid 1px #a4dbc5;
  padding: 10px
}
</style>
