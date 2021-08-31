<template>
  <slot name="navbar-insert"></slot>
  <main ref="nav-offset">
    <slot></slot>
    <slot name="footer-insert"></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "../../../emitter";

export default defineComponent({
  name: "ColliderPage",
  methods: {
    assignOffset: function (offsetVal: number) {
      let pad: number = 0;
      let offsetDiv: HTMLElement = this.$refs["nav-offset"] as InstanceType<
        typeof HTMLElement
      >;
      offsetDiv.style.marginTop = offsetVal + pad + "px";
    },
  },
  mounted() {
    emitter.on("navbarBroadcast", (evt: any): void => {
      console.log(evt);
      this.assignOffset(evt.navH);
    });
  },
});
</script>

<style lang="sass" scoped>

main
    box-sizing: content-box
    margin-left: auto
    margin-right: auto
    max-width: var(--measure)
    display: flex
    flex-direction: column
    align-items: center
</style>
