<template>
  <nav
    @click="
      emitNavbarBroadcast();
      emitDrawerEvent();
    "
    ref="navbar"
  >
    <slot></slot>
    <drawer-component :scroll="this.triggerScroll">
      <slot name="drawer-content"></slot>
    </drawer-component>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DrawerComponent from "./DrawerComponent.ce.vue";
import emitter from "../../../emitter";

export default defineComponent({
  name: "NavbarFrame",
  components: {
    DrawerComponent,
  },
  props: {
    triggerScroll: Boolean,
  },
  data: () => {
    return {
      navHeight: 0,
    };
  },
  methods: {
    emitDrawerEvent: function (): void {
      emitter.emit("shiftdrawer");
    },
    getNavHeight: function (): number {
      let nav = this.$refs.navbar as InstanceType<typeof HTMLElement>;
      if (nav) {
        let navH: number = nav.offsetHeight;
        this.navHeight = navH;
        return navH;
      } else {
        return this.navHeight;
      }
    },
    adjustedNavHeight: function (REM: number, pad: number) {
      const adjNav =
        this.getNavHeight() +
        REM * parseFloat(getComputedStyle(document.documentElement).fontSize) +
        pad;
      return adjNav;
    },
    emitNavbarBroadcast() {
      emitter.emit("navbarBroadcast", {
        navH: this.adjustedNavHeight(1, 10),
      });
    },
  },
  mounted() {
    const slots = this.$el.querySelectorAll("slot");

    slots.forEach((e: any) => {
      e.addEventListener("slotchange", () => {
        setTimeout(() => {
          //for some reason...the slot doesn't update until after this slot change event is fired
          this.emitNavbarBroadcast();
        }, 50);
      });
    });
    window.addEventListener("resize", () => {
      this.emitNavbarBroadcast();
    });
  },
});
</script>

<style lang="sass" scoped>
nav
    position: fixed
    width: 100vw
    top: 0

nav>*::slotted(*)
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 200

nav>*[name="drawer-content"]::slotted(*)
    z-index: 199

::v-deep(.draw)
    position: relative
    top: 1rem
    transition: all 0.25s ease-in-out
    background: var(--primary)
</style>

--- issues: - if drawer is smaller than what is in the navbar slot, everything
breaks down... it seems like the nav-height variable disregards the navbar slot
contents at that point.
