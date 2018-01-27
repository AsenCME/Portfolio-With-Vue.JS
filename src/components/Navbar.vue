<template>
  <div id="navbar">
    <nav class="wrap" 
        :class="{hoveredLeft: isHoveredLeft, 
                 hoveredRight: isHoveredRight, 
                 hoveredHome: isHoveredHome}"
    >
      <div class="link leftLink" @mouseover="mouseOver(0)" @mouseout="mouseOut(0)" @click="select('projects', 0)">
        <span v-for="(letter, index) of leftText" v-bind:key="index" class="letter">{{letter}}</span>
      </div>
      <div class="homeLink" @mouseover="mouseOver(1)" @mouseout="mouseOut(1)" @click="linkTo('')"></div>
      <div class="link rightLink" @mouseover="mouseOver(2)" @mouseout="mouseOut(2)" @click="select('contacts', 2)">
        <span v-for="(letter, index) of rightText" v-bind:key="index" class="letter">{{letter}}</span>
      </div>
    </nav>
  </div>
</template>

<script>
//
// TODO: Swap component at the right time
// TODO: Animation for swapping components
//
export default {
  name: "navbar-component",
  data() {
    return {
      leftText: "PROJECTS",
      rightText: "CONTACTS",
      isHoveredLeft: false,
      isClickedLeft: false,
      isClickedRight: false,
      isHoveredRight: false,
      isHoveredHome: false,
      linkToGoTo: "",
    };
  },
  mounted() {
    this.checkPath();
  },
  methods: {
    checkPath() {
      let path = this.$route.path;
      if (path === "/projects") {
        this.leftText = "CLOSE";
        this.isClickedLeft = true;
      } else if (path === "/contacts") {
        this.rightText = "CLOSE";
        this.isClickedRight = true;
      }
    },
    mouseOver(side) {
      if (side === 0 && !this.isClickedLeft) this.isHoveredLeft = true;
      else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) {
        this.isHoveredHome = true;
      } else if (side === 2 && !this.isClickedRight) this.isHoveredRight = true;
    },
    mouseOut(side) {
      if (side === 0 && !this.isClickedLeft) {
        this.isHoveredLeft = false;
      } else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) {
        this.isHoveredHome = false;
      } else if (side === 2 && !this.isClickedRight) {
        this.isHoveredRight = false;
      }
    },
    linkTo(side) {
      let path = this.$route.path;
      if (side === 0) {
        if (path === "/projects") {
          this.$router.push("/");
        } else {
          this.$router.push("/projects");
        }
      } else if (side === 2) {
        if (path === "/contacts") {
          this.$router.push("/");
        } else {
          this.$router.push("/contacts");
        }
      } else {
        this.$router.push("/");
        this.isHoveredHome = false;
        setTimeout(() => {
          if (this.leftText === "CLOSE") {
            this.isHoveredLeft = false;
            this.isClickedLeft = false;
            this.animateChange("PROJECTS", 0, 0);
          }
          if (this.rightText === "CLOSE") {
            this.isHoveredRight = false;
            this.isClickedRight = false;
            this.animateChange("CONTACTS", 0, 2);
          }
        }, 500);
      }
    },
    select(link, side) {
      this.linkToGoTo = link;
      if (side === 0) {
        if (this.isClickedRight) this.changeState(2, false);
        if (this.isClickedLeft) {
          this.changeState(0, false);
        } else this.changeState(0, true);
      } else if (side === 2) {
        if (this.isClickedLeft) this.changeState(0, false);
        if (this.isClickedRight) {
          this.changeState(2, false);
        } else this.changeState(2, true);
      }
    },
    changeState(side, state) {
      if (side === 0) {
        this.isClickedLeft = state;
        this.isHoveredLeft = false;
        if (state === true) this.changeText("CLOSE", 0, 500);
        else this.changeText("PROJECTS", 0);
      } else {
        this.isClickedRight = state;
        this.isHoveredRight = false;
        if (state === true) this.changeText("CLOSE", 2, 500);
        else this.changeText("CONTACTS", 2);
      }
    },
    changeText(text, side, delay = 0) {
      let delayLetters = 10;
      if (text !== "CLOSE") delayLetters = 0;
      if (side === 0) {
        setTimeout(() => {
          this.animateChange(text, delayLetters, 0);
          this.linkTo(side);
        }, delay);
      } else {
        setTimeout(() => {
          this.animateChange(text, delayLetters, 2);
          this.linkTo(side);
        }, delay);
      }
    },
    animateChange(text, delayLetters, side) {
      let usedClass = ".rightLink";
      if (side === 0) {
        usedClass = ".leftLink";
      }
      if (delayLetters === 0) {
        $(usedClass).addClass("text-down");
        setTimeout(() => {
          if (side === 0) this.leftText = text;
          else this.rightText = text;
          $(usedClass).removeClass("text-down");
        }, 300);
        return;
      }
      $(usedClass)
        .children()
        .each((index, letter) => {
          setTimeout(() => {
            $(letter).addClass("letter-up");
            setTimeout(() => {
              if (side === 0) this.leftText = text;
              else this.rightText = text;
              $(letter).removeClass("letter-up");
            }, 300);
          }, index * delayLetters);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/navbar.sass'
</style>
