<template>
    <div id="signup">
        <h1>Signup</h1>
        <input type="text" name="username" v-model="input.name" placeholder="Name" />
        <input type="text" name="username" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click.prevent="signup()">Signup</button>
    </div>
</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  data() {
    return {
      input: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signup() {
        fb.auth.createUserWithEmailAndPassword(this.input.email, this.input.password).then(credentials => {
            // set current user  state
            this.$store.commit('setCurrentUser', credentials.user)
            console.log(fb.usersCollection)
            console.log(credentials.user)
            // create user doc with the same UID  
            fb.usersCollection.doc(credentials.user.uid).set({
                name: this.input.name,
            }).then(() => {
                this.$store.dispatch('fetchUserProfile')
                this.$router.push('/team') //redirect after signup
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }
  },
};
</script>

<style scoped>
#signup {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 0px;
        padding: 20px;
    }
#signup button{
    margin: 20px;
  background-color: transparent;
  border: solid 1px #a4dbc5;
  padding: 10px;
}
</style>
