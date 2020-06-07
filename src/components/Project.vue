<template>
  <a class="project panel-block" :href="url">
    <span class="panel-icon"><i :class="icon"></i></span>
    {{ title }}
  </a>
</template>

<script>
export default {
  props: ['icon', 'title', 'url'],
}
</script>

<style scoped lang="scss">
.project {
  font-size: 0.9rem;
  text-align: left;
  i {
    color: darkorange;
  }
}
</style>
