import Vue from 'vue';
import Vuex from 'vuex';
const fb = require('./firebaseConfig.js')

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  mutations: {
    // updating user state
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      // get currentUser.uid that we set before in loginform.vue and access data about user and save to profile
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
          commit('setUserProfile', res.data())
      }).catch(err => {
          console.log(err)
      })
  }
  },
});
