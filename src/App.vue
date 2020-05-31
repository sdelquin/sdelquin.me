<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.min.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
</style>
