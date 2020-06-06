<template>
  <p class="biopar">
    <i :class="leadingIcon"></i>
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: ['leadingIcon'],
}
</script>

<style scoped lang="scss">
.biopar {
  text-align: justify;
  font-size: 0.9rem;
  i {
    padding-right: 0.15rem;
    color: darkorange;
    font-size: 1rem;
  }
}
</style>
