<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <img class="avatar" alt="Avatar" src="@/assets/avatar.png" />
        <h1 class="title">Sergio Delgado Quintero</h1>
        <h2 class="subtitle">Always learning!</h2>
        <SocialNetworks />
        <Location />
      </div>
    </div>
  </div>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Location from '@/components/Location.vue'

export default {
  name: 'Home',
  components: {
    SocialNetworks,
    Location,
  },
}
</script>

<style scoped lang="scss">
img.avatar {
  width: 200px;
}
</style>
