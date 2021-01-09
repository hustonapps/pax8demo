<template>
  <form class="field" @submit.prevent="onSaveForm">
    <FormField
      label="Employee Count"
      type="number"
      :value="count"
      fieldName="newCount"
      @change="onUpdate"
    />
    <button class="button is-success" type="submit">Save Changes</button>
    <button class="button" type="button" @click="onCancel">Cancel</button>
  </form>
</template>

<script>
import FormField from './FormField.vue';
  export default {
    name: 'EditEmployeeCount',
    components: {
      FormField,
    },
    props: ['count'],
    data() {
      return {
        newCount: this.count,
      };
    },
    methods: {
      onSaveForm() {
        this.$emit('save', this.newCount);
      },
      onCancel() {
        this.newCount = this.count;
        this.$emit('cancel');
      },
      onUpdate({ fieldName, value }) {
        this[fieldName] = value;
      }
    },
  }
</script>
