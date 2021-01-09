<template>
  <div class="container">
    <h1 v-if="company.name" class="title is-4">Edit {{ company.name }}</h1>
    <form no-validate @submit.prevent="submit">
      <FormField
        :readonly="true"
        label="Id (readonly)"
        :value="company.id"
      />
      <FormField
        label="Name"
        :value="company.name"
        @change="onChange"
        fieldName="name"
      />
      <FormField
        label="Domain"
        :value="company.domain"
        @change="onChange"
        fieldName="domain"
      />
      <FormField
        label="Number of Employees"
        :value="company.numberOfEmployees"
        @change="onChange"
        fieldName="numberOfEmployees"
      />
      <FormField
        label="Subscriptions Per Employee"
        :value="company.subscriptionsPerEmployee"
        @change="onChange"
        fieldName="subscriptionsPerEmployee"
      />
      <button type="submit" class="button">Save Changes</button>
    </form>
  </div>
</template>

<script>
  import API from '../services/CompanyService';
  import FormField from '../components/FormField';

  export default {
    name: 'EditCompany',
    components: {
      FormField,
    },
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
      onChange({fieldName, value}) {
        this.company[fieldName] = value;
      }
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
