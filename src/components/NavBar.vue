<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #33b5e5;">
     <a class="navbar-brand" href="/">To Do</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
  
      <ul id="nav-mobile" class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/" tag="a">Home</router-link>
        </li>
        <li v-show="!user" class="nav-item active">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-show="user" class="nav-item active">
          <router-link class="nav-link" to="/todo">To-Do</router-link>
        </li>
        <li v-show="user" class="nav-item active">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li v-show="user" class="nav-link">
          <a @click="signoutButtonPressed">Logout</a>
        </li>
      </ul>
    </div>

    
  </nav>
</template>

<script>
export default {
  name: "TabRouter"
};
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".sidenav").sidenav();
});
</script>

    

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    signoutButtonPressed(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

