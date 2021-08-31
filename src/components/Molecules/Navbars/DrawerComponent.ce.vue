<template>
  <div class="draw" ref="drawer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "../../../emitter";

export default defineComponent({
  name: "DrawerComponent",
  data: function () {
    return {
      drawn: false as boolean,
      pos: 0 as number,
      doScroll: this.scroll,
    };
  },
  props: {
    scroll: Boolean,
  },
  methods: {
    dropDrawer: function (drawn: boolean): any {
      let drawerParent: HTMLElement = this.$refs.drawer as HTMLElement;
      if (drawn) {
        drawerParent.style.top = "1rem"; //replace with navbar offset var
      } else {
        drawerParent.style.top = "-3rem";
      }
      this.drawn = !drawn;
    },
    onScroll: function (): void {
      let newPos: number = window.scrollY;
      if (newPos > this.pos) {
        console.log("down");
        this.dropDrawer(false);
      } else {
        console.log("up");
        this.dropDrawer(true);
      }
      this.pos = newPos;
    },
    getDrawerHeight() {
      let drawer = this.$refs.drawer as InstanceType<typeof HTMLElement>;
      if (drawer) {
        let drawerH: number = drawer.offsetHeight;
        return drawerH;
      } else {
        return "no";
      }
    },
  },
  mounted() {
    emitter.on("shiftdrawer", () => {
      this.dropDrawer(this.drawn);
    });
    if (this.scroll) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
});
</script>

<style>
/* styles don't apply because component is within a slot */
</style>
