<template>
  <div class="tabs is-centered">
    <ul>
      <router-link tag="li" :to="{ name: 'Bio' }">
        <router-link :to="{ name: 'Bio' }">
          <span class="icon is-small">
            <i class="fas fa-user-astronaut" aria-hidden="true"></i>
          </span>
          <span>Bio</span>
        </router-link>
      </router-link>
      <router-link tag="li" :to="{ name: 'Home' }">
        <router-link :to="{ name: 'Home' }">
          <span class="icon is-small">
            <i class="fas fa-home" aria-hidden="true"></i>
          </span>
          <span>Home</span>
        </router-link>
      </router-link>
      <router-link tag="li" :to="{ name: 'Projects' }">
        <router-link :to="{ name: 'Projects' }">
          <span class="icon is-small">
            <i class="fas fa-umbrella" aria-hidden="true"></i>
          </span>
          <span>Projects</span>
        </router-link>
      </router-link>
    </ul>
  </div>
</template>
