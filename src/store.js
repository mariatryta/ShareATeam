import Vue from 'vue';
import Vuex from 'vuex';
const fb = require('./firebaseConfig.js')

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    employees:[],
    team:[]
  },
  mutations: {
    // updating user state
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setEmployees(state,val){
      state.employees = val;
    },
    setTeam(state,val){
      state.team = val;
      console.log(state.team);
    }
  },
  actions: {
    clearData({commit}){
      commit('setCurrentUser', null);
      commit('setUserProfile', {});
    },
    fetchUserProfile({ commit, state }) {
      // get currentUser.uid that we set before in loginform.vue and access data about user and save to profile   
      console.log(state.currentUser.uid);
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
          commit('setUserProfile', res.data())
      }).catch(err => {
          console.log(err)
      })
    },
    getEmployees({commit}){
      console.log('getemployees');
      fb.employeesCollection.get().then(snapshot => {
        let docs = [];
        snapshot.forEach(doc=>{
          docs.push(doc.data());
        })
        commit('setEmployees', docs);
      }).catch(err => {
        console.log(err)
      })
    },
    getTeam({commit,state}){
      fb.teamCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setTeam', res.data());
        console.log(state.team);
      })
    }
  },
});
