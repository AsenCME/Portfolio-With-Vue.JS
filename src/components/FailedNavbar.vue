<template>
  <div>
    <div class="menu">

        <!-- Left Link -->
        <div @click="linkTo('projects')" 
             class="link leftLink"
             id="leftLink" 
             @mouseover="hoverLeftOver()" 
             @mouseout="hoverLeftOut()"
             :class="{hoveredLeft: isHoveredLeft}">
             Projects</div>

        <!-- Home Link -->
        <div class="link homeLink" 
             :class="{condense: isHoveredHome}"
             @click="linkTo('')">
          <div class="line left" 
               :class="{move: isHoveredHome}"
               @mouseover="hoverLeftOver()" 
               @mouseout="hoverLeftOut()"></div>
          <i class="material-icons home" :class="{hoveredHome: isHoveredHome}">home</i>
          <i class="material-icons free" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_free</i>
          <i class="material-icons square" @mouseover="mouseOver()" @mouseout="mouseOut()">crop_square</i>
          <div class="line right" :class="{move: isHoveredHome}"></div>
        </div>

        <!-- Right Link -->
        <div class="link rightLink" 
             @mouseover="hoverRightOver()" 
             @mouseout="hoverRightOut()"
             :class="{hoveredRight: isHoveredRight}">
             Contact</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "failded-navbar-component",
  data() {
    return {
      isHoveredHome: false,
      isHoveredRight: false,
      isHoveredLeft: false,
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
    hoverLeftOver() {
      $(".left").css("position", "aboslute");
      this.isHoveredLeft = true;
      let leftPos = $(".leftLink").position();
      let value = Math.floor(leftPos.left + $(".leftLink").width() / 2);
    },
    animateLeft(value, duration) {
      const interval = Math.floor(value / duration);
      let currentPos = Math.floor($(".left").position().left - 15);
      while (currentPos !== value + 23) {
        currentPos--;
        $(".left")
          .delay(interval)
          .offset({ left: currentPos });
      }
    },
    hoverLeftOut() {
      this.isHoveredLeft = false;
    },
    hoverRightOver() {
      this.isHoveredRight = true;
    },
    hoverRightOut() {
      this.isHoveredRight = false;
    },
  },
};
</script>
<style lang="sass" scoped>
@import '../styles/faildedNavbar.sass'
</style>
