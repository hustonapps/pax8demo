<template>
  <div class="column">
    <div class="box">
      <h4 class="title is-4">
        {{company.id}}. {{ company.name }}
      </h4>
      <button class="button is-info is-light" @click="editCompany(company.id)">Edit</button>
      <button class="button" style="margin-left: 8px;" @click="viewCompanyDetails(company.id)">View Details</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CompanyTile',
    props: {
      company: {
        type: Object,
        required: true,
        default: () => ({}),
      }
    },
    methods: {
      editCompany(id) {
        this.$router.push({name: 'editCompany', params: { id }});
      },
      viewCompanyDetails(id) {
        this.$router.push({ name: 'companyDetails', params: { id }});
      },
    },
  }
</script>

<style lang="scss" scoped>
  .column {
    h4 {
      padding-bottom: 24px;
    }
  }
</style>
