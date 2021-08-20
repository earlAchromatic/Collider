<template>
  <section>
    <slot>Default</slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullPage",
});
</script>

<style lang="sass" scoped>
section
    width: 100vw
    height: 100vh
</style>
