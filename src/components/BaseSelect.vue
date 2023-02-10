<script>
import { defineComponent } from 'vue'

import setupFormComponent from '@/helpers/setupFormComponent'
import uniqueId from '@/helpers/uniqueId'

import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

export default defineComponent({
  name: 'BaseSelect',
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      require: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
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
  <div class="form-select" :class="[error ? 'danger' : '']">
    <label v-if="label" :for="uuid" :class="required ? 'required' : ''">
      {{ label }}
    </label>

    <div class="select">
      <select v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" :value="modelValue">
        <option value="">
          {{ placeholder ? placeholder : $t('form.selectAnOption') }}
        </option>
        <option v-for="option in options" :key="option.id" :value="option.id" :selected="option.id === modelValue">
          {{ option.name }}
        </option>
      </select>
    </div>

    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>
