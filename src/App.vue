<template>
  <div id="app">
    <router-view></router-view>
    <navbar-component></navbar-component>
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";

export default {
  name: "app",
  data() {
    return {
      bgcolor: 20,
      isGoingUp: true,
    };
  },
  components: {
    NavbarComponent,
  },
  mounted() {
    this.animateBackground();
    this.scroll();
  },
  methods: {
    animateBackground() {
      window.setInterval(() => {
        $("body").css("background", `rgb(${this.bgcolor}, ${this.bgcolor}, ${this.bgcolor})`);
        if (this.isGoingUp) this.bgcolor++;
        else this.bgcolor--;
        if (this.bgcolor === 50 || this.bgcolor === 20) this.isGoingUp = !this.isGoingUp;
      }, 100);
    },
    scroll() {
      document.addEventListener("DOMContentLoaded", function() {
        $("body").mCustomScrollbar({
          axis: "y",
          theme: "light-thin",
          autoHideScrollbar: false,
          autoExpandScrollbar: true,
          mouseWheel: {
            eneable: true,
            preventDefault: true,
            normalizeDelta: true,
            scrollAmount: 150,
          },
          scrollButtons: {
            enable: true,
            scrollType: "stepless",
          },
          keyboard: {
            enable: true,
            scrollType: "stepless",
          },
          documentTouchScroll: true,
        });
      });
    },
  },
};
</script>

<style lang="sass">
@import './styles/global.sass'
</style>
