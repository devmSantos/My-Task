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
