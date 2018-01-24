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
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
