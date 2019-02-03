<template>
<div class="split-screen"> 
  <div class="split-screen-item split-form">
    <transition name="fade" mode="out-in">
    <login v-if="showLogin" key='1'></login>
    <signup v-if="!showLogin" key='2'></signup>
    </transition>
  </div>
   <div class="split-screen-item split-img">
     
  </div>
</div>
</template>

<script>
import Login from '@/components/LoginForm.vue';
import Signup from '@/components/SignupForm.vue';

export default {
  name: 'forms',
  computed: {
    showLogin(){
      return this.$store.state.showLoginForm
    }
  },
  components: {
    login: Login,
    signup: Signup,
  },
};
</script>

<style lang="scss" scoped>

.split-screen{
  display: flex;
  height: calc(100vh - 8vh);
  overflow: hidden;
  .split-screen-item{
    display: flex;
    width:50%;
  }

  .split-img{
    background-image: url('../assets/people-icons.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
} 

</style>
 

