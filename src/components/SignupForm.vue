<template>
    <div id="signup">
        <h1>Signup</h1>
        <input type="text" name="username" v-model="input.name" placeholder="Name" />
        <input type="text" name="username" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click.prevent="signup()">Signup</button>
        <p>Back to Sign In <a v-on:click="$store.commit('changeLoginForm')"> Here</a></p>
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
                this.$router.push('/') //redirect after signup
            }).catch(err => {
                console.log(err)
            })
            fb.teamCollection.doc(credentials.user.uid).set()
        }).catch(err => {
            console.log(err)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
    #signup {
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
        background-color:rgb(255, 255, 255);
        border: none;
        background-color:rgb(245, 250, 248);
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

