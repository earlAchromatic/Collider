<template>
  <div class="column">
    <div>
      <slot name="column-1" />
    </div>
    <div>
      <slot name="column-2" />
    </div>
    <div>
      <slot name="column-3" />
    </div>
    <div>
      <slot name="column-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FourColumn",
});
</script>

<style lang="sass" scoped>
.column
    display: flex
    flex-wrap: wrap
    gap: var(--s1)
    justify-content: space-between
    box-shadow: var(--top-shadow)

.column > *
    flex-grow: 1
    flex-basis: calc(( 30rem - 100%) * 999)
    text-align: center


.column > :nth-last-child(n+ 5),
.column > :nth-last-child(n+ 5) ~ *
    flex-basis: 100%

.column>*::slotted(*)
    box-sizing: content-box
    margin-left: auto
    margin-right: auto
    text-align: center
    max-width: var(--measure)
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
</style>
