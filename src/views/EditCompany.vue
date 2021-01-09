<template>
  <div class="container">
    <h1 v-if="company.name" class="title is-4">Edit {{ company.name }}</h1>
    <form no-validate @submit.prevent="submit">
      <div class="field">
        <label class="label">Id</label>
        <div class="control">
          <input readonly v-model="company.id" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="company.name" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Domain</label>
        <div class="control">
          <input v-model="company.domain" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Number of Employees</label>
        <div class="control">
          <input v-model="company.numberOfEmployees" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Subscriptions Per Employees</label>
        <div class="control">
          <input v-model="company.subscriptionsPerEmployee" class="input" />
        </div>
      </div>
      <button type="submit" class="button">Save Changes</button>
    </form>
  </div>
</template>

<script>
  import API from '../services/CompanyService';

  export default {
    name: 'EditCompany',
    data() {
      return {
        company: {},
      };
    },
    async created() {
      const id = this.$route.params.id;
      const company = await API.getById(id);
      this.company = { ...company };
    },
    methods: {
      submit() {
        alert(`Data changed! \n${JSON.stringify(this.company, null, 2)}`);
        this.$router.push({ name: 'home'});
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 80%;
    margin: 0 auto;
    .title {
      padding-bottom: 24px;
    }
  }
</style>
