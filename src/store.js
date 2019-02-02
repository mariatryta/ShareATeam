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
      state.team = val
      console.log('set team' + state.team);    
    }
      
  },
  actions: {
    clearData({commit}){
      commit('setCurrentUser', null);
      commit('setUserProfile', {});
    },
    fetchUserProfile({ commit, state }) {
      // get currentUser.uid that we set before in loginform.vue and access data about user and save to profile   
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
          commit('setUserProfile', res.data())
      }).catch(err => {
          console.log(err)
      })
    },
    // get employees array
    getEmployees({commit}){
      let docs = [];
      fb.employeesCollection.get().then(function(snapshot) {
        snapshot.forEach(function(doc) {
            docs.push({key:doc.id, data:doc.data()});
        });
        commit('setEmployees', docs)
      }).catch(err => {
         console.log(err)
        }) 
    },
    //retrieving team data from firebase
    getTeam({commit,state}){
      fb.teamCollection.doc(state.currentUser.uid).get().then(function(snapshot){
        let data = snapshot.data()
        let arr=[]
        for (var key in data) {
          arr.push(data[key]);
        }
        commit('setTeam', arr)
      }).catch(err => {
         console.log(err)
        }) 
    },
    // When click on employee member gets added, first to database, then it commits mutation addMember
    addMembertoTeam({commit,state,dispatch}, member){
      let newMember = {
        'id':member.key,
        ...member.data}
      console.log(member);
       fb.teamCollection.doc(state.currentUser.uid).set({[member.key]:newMember},{merge: true}).then(function() {
         console.log("Document successfully written!");
      });
      dispatch('getTeam')
    },
  }
});
