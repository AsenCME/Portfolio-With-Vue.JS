<template>
  <div>
    <div class="menu">
        <div @click="linkTo('projects')" class="link">Projects</div>
        <div class="link homeLink" :class="{condense: isHoveredHome}">
          <div class="line left" :class="{move: isHoveredHome}"></div>
          <i class="material-icons home" :class="{hoveredHome: isHoveredHome}">home</i>
          <i class="material-icons free" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_free</i>
          <i class="material-icons square" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_square</i>
          <div class="line right" :class="{move: isHoveredHome}"></div>
        </div>
        <div class="link">Contact</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "navbar-component",
  data() {
    return {
      isHoveredHome: true,
    };
  },
  methods: {
    linkTo(route) {
      this.$router.push(`/${route}`);
    },
    mouseOver() {
      this.isHoveredHome = true;
    },
    mouseOut() {
      this.isHoveredHome = false;
    },
  },
};
</script>
<style lang="sass" scoped>
@import '../styles/navbar.sass'
</style>
