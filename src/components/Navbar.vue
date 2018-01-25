<template>
  <div id="navbar">
    <nav class="wrap" 
        :class="{hoveredLeft: isHoveredLeft, 
                 hoveredRight: isHoveredRight, 
                 hoveredHome: isHoveredHome, 
                 constantLeft: isClickedLeft, 
                 constantRight: isClickedRight}"
    >
      <div class="link leftLink" @mouseover="mouseOver(0)" @mouseout="mouseOut(0)" @click="linkTo('projects');select(0)">
        <span v-for="(letter, index) of leftText" v-bind:key="index">{{letter}}</span>
      </div>
      <div class="homeLink" @mouseover="mouseOver(1)" @mouseout="mouseOut(1)" @click="linkTo('')"></div>
      <div class="link rightLink" @mouseover="mouseOver(2)" @mouseout="mouseOut(2)" @click="linkTo('contact');select(1)">
        <span v-for="(letter, index) of rightText" v-bind:key="index">{{letter}}</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-component",
  data() {
    return {
      leftText: "PROJECTS",
      rightText: "CONTACT",
      isHoveredLeft: false,
      isClickedLeft: false,
      isClickedRight: false,
      isHoveredRight: false,
      isHoveredHome: false,
    };
  },
  methods: {
    mouseOver(side) {
      if (side === 0 && !this.isClickedLeft) this.isHoveredLeft = true;
      else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) this.isHoveredHome = true;
      else if (side === 2 && !this.isClickedRight) this.isHoveredRight = true;
      let posLeft = $(".leftLink").position().left;
    },
    mouseOut(side) {
      if (side === 0) this.isHoveredLeft = false;
      else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) this.isHoveredHome = false;
      else this.isHoveredRight = false;
    },
    linkTo(link) {
      this.$router.push("/" + link);
    },
    select(side) {
      if (side === 0) {
        this.isClickedLeft = true;
        this.isHoveredLeft = false;
        window.setTimeout(() => {
          this.changeText("CLOSE", 0);
        }, 450);
      } else {
        this.isClickedRight = true;
        this.isHoveredRight = false;
        window.setTimeout(() => {
          this.changeText("CLOSE", 1);
        }, 450);
      }
    },
    // TODO: Change Text to Close
    // TODO: Animate letters up and then from below
    // TODO: Click again to reurn to previous state
    changeText(text, side) {
      if (side === 0) {
        $(".leftLink")
          .children()
          .each(function(index, letter) {
            setTimeout(() => {
              $(this).addClass("letter-up");
            }, index * 20);
          });
      } else {
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/navbar.sass'
</style>
