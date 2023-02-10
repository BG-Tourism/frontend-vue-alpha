<script>
import { computed, defineComponent, ref } from 'vue'

import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

export default defineComponent({
  name: 'GiveRating',
  components: {
    BaseErrorMessage,
  },
  inheritAttrs: false,
  props: {
    /**
      * The error message of the input
      * @type String
      * @default ''
      * @name error
      */
    error: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const rating = ref(0)

    const updateRating = (stars) => {
      rating.value = stars
    }

    const hasError = computed(() => {
      if (props.error !== undefined && props.error !== null && props.error.length > 0)
        return props.error
      else
        return null
    })

    return {
      rating,
      updateRating,
      hasError,
    }
  },
})
</script>

<template>
  <div class="rating-container" :class="[hasError ? 'has-error' : '']">
    <div v-if="$slots.label" class="label">
      <slot name="label" />
    </div>

    <div v-for="n in 5" :key="n">
      <i v-if="n <= rating" class="icon-star-solid" @click="updateRating(n)" />
      <i v-else class="icon-star" @click="updateRating(n)" />
    </div>

    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>
