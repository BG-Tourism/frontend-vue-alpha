<script>
import { defineComponent } from 'vue'

import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

import uniqueId from '@/helpers/uniqueId'
import setupFormComponent from '@/helpers/setupFormComponent'

export default defineComponent({
  name: 'BaseCheckbox',
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const uuid = uniqueId().getID()
    const { updateValue } = setupFormComponent(props, context)

    return {
      updateValue,
      uuid,
    }
  },
})
</script>

<template>
  <div class="form-checkbox" :class="[error ? 'danger' : '']">
    <label :for="uuid">
      <input v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" :checked="modelValue" type="checkbox">

      <span class="text" v-html="label" />
      <span class="checkmark" />

      <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
        {{ error }}
      </BaseErrorMessage>
    </label>
  </div>
</template>
