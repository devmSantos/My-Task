// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyCfYZQs9xT6pkK-m_7wWDlsoA7GwN3HdMk",
  authDomain: "authvue-d79e2.firebaseapp.com",
  databaseURL: "https://authvue-d79e2.firebaseio.com",
  projectId: "authvue-d79e2",
  storageBucket: "authvue-d79e2.appspot.com",
  messagingSenderId: "220378481886",
  appId: "1:220378481886:web:d58647bcae44f84b08ee4f",
  measurementId: "G-V3TRW0BPCE"
};
firebase.initializeApp(firebaseConfig);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})
