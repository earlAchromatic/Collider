<template>
  <main>
    <cluster-nav></cluster-nav>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import clusterNav from "./components/ClusterNav.ce.vue";

export default defineComponent({
  name: "App",
  components: {
    clusterNav,
  },
});
</script>

<style scoped lang="sass">
main
    width: 100vw
    height: 100vh
</style>
