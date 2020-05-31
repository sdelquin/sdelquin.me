<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/avatar.png" />
    <SocialNetworks name="Sergio Delgado Quintero" />
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
