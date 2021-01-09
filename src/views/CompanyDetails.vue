<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="box">
          <h3 class="title is-3">{{ company.name }}</h3>
          <DataLabel title="Company Id" :value="company.id" />
          <DataLabel title="Domain" :value="company.domain" />
          <DataLabel title="Number of Employees" :value="company.numberOfEmployees" />
          <DataLabel title="Subscriptions Per Employee" :value="company.subscriptionsPerEmployee" />
          <DataLabel title="Total Subscriptions" :value="totalSubscriptions" />
        </div>
      </div>
      <div class="column is-6">
        <div class="box">
          <div v-show="!isEditing">
            <button class="button is-info" @click="changeEmployeeCount">
              Change Number of Employees
            </button>
          </div>
          <div v-show="isEditing">
            <EditEmployeeCount
              :count="company.numberOfEmployees"
              @cancel="cancelChangeEmployeeCount"
              @save="saveChanges"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="button" @click="backToDirectory">Back to Directory</button>
  </div>
</template>

<script>
  import API from '../services/CompanyService';
  import DataLabel from '../components/DataLabel.vue';
  import EditEmployeeCount from '../components/EditEmployeeCount.vue';

  export default {
    name: 'CompanyDetails',
    components: {
      DataLabel,
      EditEmployeeCount,
    },
    data() {
      return {
        company: {},
        isEditing: false,
      };
    },
    async created() {
      const id = this.$route.params.id;
      const company = await API.getById(id);
      this.company = { ...company };
    },
    computed: {
      totalSubscriptions() {
        return this.company.numberOfEmployees * this.company.subscriptionsPerEmployee;
      },
    },
    methods: {
      changeEmployeeCount() {
        this.isEditing = true;
      },
      cancelChangeEmployeeCount() {
        this.isEditing = false;
      },
      saveChanges(newCount) {
        this.company.numberOfEmployees = newCount;
        this.isEditing = false;
      },
      backToDirectory() {
        this.$router.push({path: '/'});
      }
    },
  };
</script>
