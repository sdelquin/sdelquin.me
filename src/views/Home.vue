<template>
  <div class="home">
    <img class="avatar" alt="Avatar" src="@/assets/avatar.png" />
    <h1 class="title">Sergio Delgado Quintero</h1>
    <h2 class="subtitle">Always learning!</h2>
    <SocialNetworks />
    <Location />
  </div>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Location from '@/components/Location.vue'

const PAGE_TITLE = 'Hi'

export default {
  name: 'Home',
  components: {
    SocialNetworks,
    Location,
  },
  metaInfo: {
    title: PAGE_TITLE,
  },
}
</script>

<style scoped lang="scss">
img.avatar {
  width: 200px;
}
</style>
