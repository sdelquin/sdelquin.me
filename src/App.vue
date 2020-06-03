<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <router-view />
        </div>
      </div>
    </div>
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
