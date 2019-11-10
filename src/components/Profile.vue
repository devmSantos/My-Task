<template>
  <section>
    <navigation></navigation>

    <!-- Title -->
    <h5 class="center-align">Profile</h5>
    <!-- end Title -->

    <div class="card" style="max-width:410px;margin:0 auto;" v-if="user">
      <div class="waves activator waves-block waves-light center">
        <img
          class="center"
          :src="user.photoURL"
          style="width:75px;height:75px;border-radius:50%;margin-top:5px"
        />
      </div>

      <div class="card-content">
        <span class="card-title activator center grey-text text-darken-4">
          Informações
          <i class="material-icons right">more_vert</i>
        </span>
    
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          Profile
          <i class="material-icons right">close</i>
        </span>
        <p>
          name:
          <strong>{{user.displayName}}</strong>
          <br />email:
          <strong>{{user.email}}</strong>
          <br />uid:
          <strong>{{user.uid}}</strong>
          <br />provider:
          <strong class="teal-text">{{user.providerData[0].providerId}}</strong>
        </p>
      </div>
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
