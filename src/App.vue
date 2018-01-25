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
    window.setInterval(() => {
      $("body").css("background", `rgb(0, 0, ${this.bgcolor})`);
      if (this.isGoingUp) this.bgcolor++;
      else this.bgcolor--;
      if (this.bgcolor === 70 || this.bgcolor === 20) this.isGoingUp = !this.isGoingUp;
    }, 200);
  },
};
</script>

<style lang="sass">
@import './styles/global.sass'
</style>
