<template>
  <section id="intro">
    <navigation></navigation>


    <div class="card" id="" style="width: 25rem; margin:0 auto;" v-if="user">
      <img
        :src="user.photoURL"
        class="card-img-top"
        style="width:75px;height:75px;border-radius:50%;margin-top:25px; margin:0 auto;"
      />
      <div class="card-body">
        <h4 class="card-text text-center">Informations</h4>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item ">Name: <span class="badge badge-pill badge-dark">{{user.displayName}}</span></li>
        <li class="list-group-item">Email: <span class="badge badge-pill badge-info">{{user.email}}</span></li>
        <li class="list-group-item">ID: <span class="badge badge-pill badge-dark">{{user.uid}}</span></li>
        <li class="list-group-item">Provider: <span class="badge badge-pill badge-info">{{user.providerData[0].providerId}}</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    navigation
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
  }
};
</script>
