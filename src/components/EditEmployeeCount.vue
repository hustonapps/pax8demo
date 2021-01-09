<template>
  <form class="field" @submit.prevent="onSaveForm">
    <label>Employee Count</label>
    <div class="control">
      <input class="input" type="number" :value="count" @input="onUpdate" />
    </div>
    <button class="button is-success" type="submit">Save Changes</button>
    <button class="button" type="button" @click="onCancel">Cancel</button>
  </form>
</template>

<script>
  export default {
    name: 'EditEmployeeCount',
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
      onUpdate(e) {
        this.newCount = e.target.value;
      }
    },
  }
</script>
