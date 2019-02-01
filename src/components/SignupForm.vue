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
        fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
            this.$store.commit('setCurrentUser', user)

            // create user obj
            fb.usersCollection.doc(user.uid).set({
                name: this.signupForm.name,
                title: this.signupForm.title
            }).then(() => {
                this.$store.dispatch('fetchUserProfile')
                this.$router.push('/dashboard')
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
