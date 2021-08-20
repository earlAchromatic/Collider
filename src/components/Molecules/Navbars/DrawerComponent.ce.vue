<template>
  <div class="draw" ref="drawer" @shift-drawer="dropDrawer()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DrawerComponent",
  methods: {
    dropDrawer: function () {
      let drawerParent: HTMLElement = this.$refs.drawer as HTMLElement;
      drawerParent.style.top = "75px";
      console.log(drawerParent);
    },
  },
  mounted() {
    document.addEventListener.call(window, "shift-drawer", () => {
      console.log("caught");
    });
  },
});
</script>

<style>
/* styles don't apply because component is within a slot */
</style>
