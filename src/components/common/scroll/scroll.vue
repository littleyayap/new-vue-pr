<template>
  <div class="wrapper" ref="aaa">
    <div class="conted">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from "better-scroll";

export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.scroll = new Scroll(this.$refs.aaa, {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true,
    });

    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("contentscroll",position);
        // console.log(position);
      });
    }

     this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("--------");
    },
  },

  //  watch: {
  // 	  data() {
  //       setTimeout(this.refresh, 20)
  //     }
  //  },

  //   data() {
  // 	  return {
  // 	    scroll: {}
  //     }
  //   },
};
</script>

<style scoped>
/* .wrapper{
position: absolute;
left: 0;
top: 0;
overflow: hidden;
} */
</style>