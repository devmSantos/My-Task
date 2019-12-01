<template>
   <!--==========================
  Header
  ============================-->
  <header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left center" style="width: 5.5em;" >
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> -->
        <a href="/" class="scrollto"><img src="https://theme.zdassets.com/theme_assets/2393343/78d8e3134f264bd79aea43d8580d50df551d21fd.png" alt="" class="img-fluid"></a>
      </div>

      <nav class="main-nav float-right  d-lg-block">
        <ul>
          <li class="active"> <router-link class="nav-link" to="/" tag="a">Home</router-link></li>
          <li v-show="!user" > <router-link class="nav-link" to="/login">Login</router-link></li>
          <li v-show="user"><router-link class="nav-link" to="/todo">Task</router-link></li>
          <li v-show="user"> <router-link class="nav-link" to="/profile">Profile</router-link></li>
          <li v-show="user"> <a @click="signoutButtonPressed">Logout</a></li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header><!-- #header -->
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


