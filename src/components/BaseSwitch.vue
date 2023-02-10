<script>
import { defineComponent } from 'vue'

import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

import uniqueId from '@/helpers/uniqueId'
import setupFormComponent from '@/helpers/setupFormComponent'

export default defineComponent({
  name: 'BaseSwitch',
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
  <div class="form-switch" :class="[options ? 'with-text' : '']">
    <div v-if="label" class="label" :for="uuid" :class="required ? 'required' : ''">
      {{ label }}
    </div>

    <label>
      <input v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" :checked="modelValue" type="checkbox">
      <span class="switch">
        <span v-if="options" class="true">{{ options.first }}</span>
        <span v-if="options" class="false">{{ options.second }}</span>
      </span>
    </label>

    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>
