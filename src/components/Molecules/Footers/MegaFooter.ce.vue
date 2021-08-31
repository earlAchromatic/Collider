<template>
  <div class="megafooter">
    <four-column>
      <template v-slot:column-4>
        <slot name="f-column-4" />
      </template>
    </four-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlatFooter from "./FlatFooter.ce.vue";
import FourColumn from "../Micros/FourColumn.ce.vue";

export default defineComponent({
  name: "MegaFooter",
  components: {
    FlatFooter,
    FourColumn,
  },
});
</script>

<style lang="sass">
.megafooter
    width: 100vw
    display: flex
    flex-direction: column
    justify-content: flex-start


.megafooter > *::slotted(*)
    margin-top: 0
    margin-bottom: 0


.megafooter > * + *::slotted(*)
    margin-top: var(--space, 1.5rem)
</style>
