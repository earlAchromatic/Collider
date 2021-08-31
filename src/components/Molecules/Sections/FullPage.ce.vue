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

    height: 100vh
</style>
