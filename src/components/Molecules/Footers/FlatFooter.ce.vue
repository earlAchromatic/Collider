<template>
  <footer>
    <div class="center">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="center">
      <slot name="right" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlatFooter",
});
</script>

<style lang="sass" scoped>
footer
  display: flex
  flex-wrap: wrap
  gap: var(--s1)
  width: 100vw
  box-shadow: var(--top-shadow)

footer > *
  flex-grow: 1
  flex-basis: calc(( 30rem - 100%) * 999)


footer > :nth-last-child(n+ 5),
footer > :nth-last-child(n+ 5) ~ *
  flex-basis: 100%

footer
    .center
        box-sizing: content-box
        margin-left: auto
        margin-right: auto
        text-align: center
        max-width: var(--measure)
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        // &:first-child - would be nice functionality but... how?
        //     align-items: flex-start
        // &:last-child
        //     align-items: flex-end
</style>
