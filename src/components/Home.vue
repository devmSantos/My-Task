<template>
  <section>
    <navigation></navigation>
    <br />

    <div class="container ">
      <img class="center" style="height: 4rem" src="https://theme.zdassets.com/theme_assets/2393343/78d8e3134f264bd79aea43d8580d50df551d21fd.png" alt="" srcset="">
      <br />
      <div class="row text-center align-items-center">
        <br />
        <div class="col"><h4>Make your life more easy !</h4>
        <h4> Add your tasks with one click</h4>
        </div>
      </div>
      <br />
       
      <div class="row text-center align-items-center">
        <br />
        <br />
        <div class="col">
          <br />
          <img style="width: 20rem" v-bind:src="'/static/undraw_project_completed_w0oq.svg'" />
        </div>
      </div>
    </div>

    <img src alt />
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    navigation
  }
};
</script>


<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
