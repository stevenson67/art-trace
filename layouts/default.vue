<template>
  <div id="app">
    <sections-header></sections-header>
    <main id="main">
      <nuxt/>
    </main>
    <sections-footer></sections-footer>
  </div>
</template>

<script>

export default {
  name: "default",
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#main {
  flex-grow: 1;
}
</style>
