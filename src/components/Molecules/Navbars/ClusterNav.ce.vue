<template>
  <div class="cluster outer-cluster">
    <template v-if="imageUrl">
      <img :src="imageUrl" alt="" />
    </template>
    <ul class="cluster inner-cluster" :class="{ 'ul-Full-Width': !imageUrl }">
      <li v-for="link in parseLinks" :key="link">
        <a :href="link.linkUrl" v-text="link.name"> </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClusterNav",
  props: {
    imagePath: String,
    linksArray: String,
    lastItemUnique: Boolean,
  },
  computed: {
    parseLinks(): object | void {
      if (this.linksArray) {
        let lA = this.linksArray.replace(/'/g, '"');
        return JSON.parse(lA);
      }
    },
  },
  data: function () {
    return {
      imageUrl: this.imagePath,
      links: [],
    };
  },
  methods: {},
});
</script>

<style scoped lang="sass">
@import '../../../styles/style'

root
    --nav-height: 1rem

img
    width: 4rem
    padding: 0.5rem

div
    width: 100%
    box-shadow: var(--shadow)
    background: var(--primary)

ul
    height: 100%

.ul-Full-Width
    width: 100%

li
    color: inherit
    height: 100%
    padding: 0 1rem
    display: flex
    flex-direction: column
    justify-content: center

li:last-child
    flex-grow: 2
    text-align: center
    border: 1px solid black

.cluster
    display: flex
    flex-wrap: wrap
    gap: var(--space, 1rem)
    justify-content: flex-start
    align-items: center

.outer-cluster
    justify-content: space-evenly
    align-items: center

.inner-cluster
    justify-content: flex-start
    align-items: center
</style>
