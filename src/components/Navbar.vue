<template>
  <div>
    <div class="menu">
        <div @click="linkTo('projects')" class="link">Projects</div>
        <div class="link homeLink">
          <div class="line left"></div>
          <i class="material-icons home" :class="{hovered: isHovered}">home</i>
          <i class="material-icons free" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_free</i>
          <i class="material-icons square" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_square</i>
          <div class="line right"></div>
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
      isHovered: false,
    };
  },
  methods: {
    linkTo(route) {
      this.$router.push(`/${route}`);
    },
    mouseOver() {
      this.isHovered = true;
    },
    mouseOut() {
      this.isHovered = false;
    },
  },
};
</script>
<style lang="sass" scoped>
@import '../styles/navbar.sass'
</style>
