<template>
  <div class="columns">
    <CompanyTile
      v-for="(company, index) in companies"
      :company="company"
      :index="index"
      :key="company.id"
    />
  </div>
</template>

<script>
  import CompanyTile from './CompanyTile.vue';

  export default {
    name: 'CompanyList',
    props: {
      companies: {
        type: Array,
        default: () => [],
      },
    },
    components: {
      CompanyTile,
    }
  }
</script>
