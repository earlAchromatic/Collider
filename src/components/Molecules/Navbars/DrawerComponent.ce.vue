<template>
  <div class="draw" ref="drawer" @shift-drawer="dropDrawer()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "../../../emitter";

export default defineComponent({
  name: "DrawerComponent",
  data: () => {
    return {
      drawn: false,
    };
  },
  methods: {
    dropDrawer: function (drawn: boolean) {
      let drawerParent: HTMLElement = this.$refs.drawer as HTMLElement;
      if (drawn) {
        drawerParent.style.top = "75px";
      } else {
        drawerParent.style.top = "1rem";
      }
      this.drawn = !drawn;
    },
  },
  mounted() {
    emitter.on("shift-drawer", () => {
      this.dropDrawer(this.drawn);
    });
  },
});
</script>

<style>
/* styles don't apply because component is within a slot */
</style>
