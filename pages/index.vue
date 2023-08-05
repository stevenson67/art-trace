<template>
  <div class="home">
    <hero></hero>
  </div>
</template>

<script>
import Hero from "~/components/sections/hero.vue";

export default {
  components: {Hero}
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>
