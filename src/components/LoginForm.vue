<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click.prevent="login()">Login</button>
        <p>Don't have an account? Click <a v-on:click="$store.commit('changeLoginForm')">Here</a> to start one</p> 
    </div>
</template>

<script>
const fb = require('../firebaseConfig.js')

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
        fb.auth.signInWithEmailAndPassword(this.input.email, this.input.password).then(credentials => {
            this.$store.commit('setCurrentUser', credentials.user)
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/') //new route
        }).catch(err => {
            console.log(err)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
    width: 50%;
    margin:  auto;
    padding: 2em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center; 
    align-items: center;
    h1{
        color: #90E3B6;
        font-family: 'Oswald', sans-serif;
    }
    input[name="username"],input[name="password"] {
        width: 80%;
        margin:auto;
        padding: 1em;
        margin-bottom:1em;
        background-color:rgb(245, 250, 248);
        border: none;
    }
    button{
        margin: 20px;
        background-color: #90E3B6;
        display: inline-block;
        width: 30%;
        padding: 0.8em 1.2em;
        border-radius: 45px;
        border: none;
        font-weight: bold;
        color: rgb(58, 58, 58);
    }
    a{
        font-weight: bold;
        cursor: pointer;
    }
}




</style>



