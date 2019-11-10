<template>
 <nav class=" nav-extended #e91e63 pink center">
        <div class="nav-wrapper center">

           
           <ul id="nav-mobile" class="center ">
                <li>
                    <router-link  to="/"  tag="a">Home</router-link>
                </li>
                <li v-show="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-show="user">
                    <router-link to="/todo">To Do</router-link>
                </li>
                <li v-show="user">
                    <router-link to="/profile">Profile</router-link>
                </li>
                <li v-show="user">
                    <a @click="signoutButtonPressed">Logout</a>
                </li>
            </ul>
        </div>
   
    </nav>
    
</template>

<script>
  export default {
    name: 'TabRouter'
  }
  
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

