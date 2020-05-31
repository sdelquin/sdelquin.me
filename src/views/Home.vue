<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <img alt="Avatar" src="@/assets/avatar.png" />
        <h1 class="title">Sergio Delgado Quintero</h1>
        <h2 class="subtitle">Always learning!</h2>
      </div>
    </div>
    <SocialNetworks />
  </div>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'

export default {
  name: 'Home',
  components: {
    SocialNetworks,
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
