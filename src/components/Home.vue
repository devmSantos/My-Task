<template>
  <section>
    <navigation></navigation>
    <!--==========================
    Intro Section
    ============================-->
    <section id="intro" class="clearfix">
      <div class="container">
        <div class="intro-img">
          <img src="static/img/undraw_taking_notes_tjaf.svg" alt class="img-fluid" />
        </div>

        <div class="intro-info">
          <h2>
            Make your life
            <br />more easy !
            <br />
            <br />Add your tasks with one click
          </h2>
          <div>
            <a href="/Login" class="btn-get-started scrollto">Get Started</a>
            <a href="#about" class="btn-services scrollto">How it Works</a>
          </div>
        </div>
      </div>
    </section>
    <!-- #intro -->
    <br />
    <main id="main">

       <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">

        <header class="section-header">
          <h3>How it Works</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div class="icon-box wow fadeInUp">
              <div class="icon"><i class="fa fa-tasks"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><i class="fa fa-check-circle-o "></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon"><i class="fa fa-mobile "></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src="static/img/undraw_note_list_etto.svg" class="img-fluid" alt="">
          </div>
        </div>

       
          
        </div>

      </div>
    </section><!-- #about -->

      <!--==========================
    Footer
      ============================-->
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright
            <strong>My Task</strong>. All Rights Reserved
          </div>
          <div class="credits">
            <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
            -->
            Designed by
            <a href="https://bootstrapmade.com/">My Task</a>
          </div>
        </div>
      </footer>
      <!-- #footer -->

      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
      <!-- Uncomment below i you want to use a preloader -->
      <!-- <div id="preloader"></div> -->
    </main>
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
