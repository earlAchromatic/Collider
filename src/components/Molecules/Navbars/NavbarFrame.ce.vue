<template>
  <nav @click="emitDrawerEvent()">
    <slot></slot>
    <drawer-component>
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
  methods: {
    emitDrawerEvent: function (): void {
      emitter.emit("shift-drawer");
    },
  },
});
</script>

<style lang="sass" scoped>
nav
    position: fixed
    width: 100vw

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
    transition: all 0.5s ease-in-out
</style>
