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
        <span v-for="(letter, index) of leftText" v-bind:key="index" class="letter">{{letter}}</span>
      </div>
      <div class="homeLink" @mouseover="mouseOver(1)" @mouseout="mouseOut(1)" @click="linkTo('')"></div>
      <div class="link rightLink" @mouseover="mouseOver(2)" @mouseout="mouseOut(2)" @click="linkTo('contact');select(1)">
        <span v-for="(letter, index) of rightText" v-bind:key="index" class="letter">{{letter}}</span>
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
      rightText: "CONTACTS",
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
      else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) {
        this.isHoveredHome = true;
        let wrap = $(".wrap");
        $(".wrap").css("overflow-y", "visible");
      } else if (side === 2 && !this.isClickedRight) this.isHoveredRight = true;
    },
    mouseOut(side) {
      if (side === 0) this.isHoveredLeft = false;
      else if (side === 1 && !(this.isHoveredLeft || this.isHoveredRight)) {
        this.isHoveredHome = false;
        setTimeout(() => {
          $(".wrap").css("overflow-y", "hidden");
        }, 500);
      } else this.isHoveredRight = false;
    },
    linkTo(link) {
      this.$router.push("/" + link);
    },
    select(side) {
      if (side === 0) {
        if (this.isClickedLeft) {
          this.changeState(0, false);
        } else this.changeState(0, true);
      } else {
        if (this.isClickedRight) {
          this.changeState(1, false);
        } else this.changeState(1, true);
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
        if (state === true) this.changeText("CLOSE", 1, 500);
        else this.changeText("CONTACTS", 1);
      }
    },
    changeText(text, side, delay = 0) {
      let delayLetters = 10;
      if (text !== "CLOSE") delayLetters = 0;
      if (side === 0) {
        setTimeout(() => {
          this.changeLeft(text, delayLetters);
        }, delay);
      } else {
        setTimeout(() => {
          this.changeRight(text, delayLetters);
        }, delay);
      }
    },
    changeLeft(text, delayLetters) {
      if (delayLetters === 0) {
        $(".leftLink").addClass("text-down");
        setTimeout(() => {
          this.leftText = text;
          $(".leftLink").removeClass("text-down");
        }, 300);
        return;
      }
      $(".leftLink")
        .children()
        .each((index, letter) => {
          setTimeout(() => {
            $(letter).addClass("letter-up");
            setTimeout(() => {
              this.leftText = text;
              $(letter).removeClass("letter-up");
            }, 300);
          }, index * delayLetters);
        });
    },
    changeRight(text, delayLetters) {
      if (delayLetters === 0) {
        $(".rightLink").addClass("text-down");
        setTimeout(() => {
          this.rightText = text;
          $(".rightLink").removeClass("text-down");
        }, 300);
        return;
      }
      $(".rightLink")
        .children()
        .each((index, letter) => {
          setTimeout(() => {
            $(letter).addClass("letter-up");
            setTimeout(() => {
              this.rightText = text;
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
