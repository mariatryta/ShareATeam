import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import 'firebase/firestore';
const fb = require('./firebaseConfig.js')

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    employees:[],
    team:[],
    showLoginForm: true,
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
    },
    changeLoginForm(state){
      state.showLoginForm =!state.showLoginForm;
    },
  },
  actions: {
    // after logout
    clearData({commit}){
      commit('setCurrentUser', null);
      commit('setUserProfile', {});
      commit('setTeam', []);
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
    getTeam({commit,state},id){
      fb.teamCollection.doc(id).get().then(function(snapshot){
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
       fb.teamCollection.doc(state.currentUser.uid).set({[member.key]:newMember},{merge: true}).then(function() {
         console.log("Document successfully written!");
      });
      dispatch('getTeam',state.currentUser.uid )
    },
    removeMemberFromTeam({commit,state,dispatch}, member){
      let memberId= member.id;
      
      fb.teamCollection.doc(state.currentUser.uid).update({
        [memberId]:firebase.firestore.FieldValue.delete()
      }).then(
        function() {
         console.log('deleted');
        }
      )
      dispatch('getTeam',state.currentUser.uid )
    },
  }
});
