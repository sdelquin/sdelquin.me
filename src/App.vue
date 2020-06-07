<template>
  <div id="app">
    <NavBar />
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  metaInfo: {
    title: 'Hi',
    titleTemplate: '%s | Sergio Delgado Quintero',
  },
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.min.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';

.section {
  padding-top: 0.5rem;
}

/*** TRANTISIONS ***/
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
