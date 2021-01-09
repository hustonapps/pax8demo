<template>
  <div class="data-label">
    <p class="title is-5">{{ title }}</p>
    <p class="subtitle">{{ value }}</p>
  </div>
</template>

<script>
  export default {
    name: 'DataLabel',
    props: ['title', 'value'],
  }
</script>

<style lang="scss" scoped>
  .data-label {
    display: block;
    margin-bottom: 32px;
  }
</style>
