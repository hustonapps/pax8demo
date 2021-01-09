<template>
  <div id="HomePage" class="container">
    <CompanyList :companies="companies" />
  </div>
</template>

<script>
  import API from '../services/CompanyService';
  import CompanyList from '../components/CompanyList';

  export default {
    name: 'home',
    data() {
      return {
        companies: [],
      };
    },
    async created() {
      const companies = await API.getAll();
      this.companies = companies;
    },
    components: {
      CompanyList,
    }
  }
</script>

<style scoped lang="scss">
  #HomePage {
    padding: 20px 60px;
    box-sizing: border-box;
  }
</style>
