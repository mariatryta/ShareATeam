<template>
  <div class="forms">
    <login v-if="showLoginForm"></login>
    <signup v-if="!showLoginForm"></signup>
    <p v-if="showLoginForm">Don't have an account? Click <a v-on:click="changeForm">Here</a> to start one</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/LoginForm.vue';
import Signup from '@/components/SignupForm.vue';

export default {
  name: 'forms',
  data() {
    return {
      showLoginForm:true,
    }
  },
  components: {
    login: Login,
    signup: Signup,
  },
  methods: {
    changeForm:function(){
      this.showLoginForm = false;
    }
  },
};
</script>

<style scoped>
  a{
    cursor: pointer;
    color: teal;
  }
</style>

