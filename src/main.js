import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCyOUUMiG0Ir5cxcoE6q2MAjmz6Dd3Nhvk",
  authDomain: "pruebavet-90d00.firebaseapp.com",
  databaseURL: "https://pruebavet-90d00.firebaseio.com",
  projectId: "pruebavet-90d00",
  storageBucket: "pruebavet-90d00.appspot.com",
  messagingSenderId: "79654867410",
  appId: "1:79654867410:web:e08141fd67d1ea8915780b"
};

let app = "";

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
