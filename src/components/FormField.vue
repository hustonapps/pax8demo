<template>
  <div class="field">
    <label class="label">
      {{ label }}
    </label>
    <div class="control">
      <input
        class="input"
        :readonly="readonly"
        :type="type"
        :value="value"
        @input="$emit('change', { fieldName, value: $event.target.value })"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormField',
    props: ['label', 'type', 'readonly', 'value', 'fieldName']
  }
</script>
