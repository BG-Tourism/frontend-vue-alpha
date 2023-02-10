<script>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TruncateString',
  props: {
    string: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      default: 150,
    },
  },
  setup(props) {
    const truncated = ref(true)

    const truncateString = (str, maxLength) => {
      if (str.length <= maxLength)
        return str

      const text = str.substring(0, maxLength - 1)
      const lastSpaceIndex = text.lastIndexOf(' ')

      return `${text.substring(0, lastSpaceIndex)}&hellip;`
    }

    const displayString = computed(() => {
      if (truncated.value)
        return truncateString(props.string, props.maxLength)
      else
        return props.string
    })

    const toggleTruncation = () => {
      truncated.value = !truncated.value
    }

    return {
      props,
      truncated,
      displayString,
      truncateString,
      toggleTruncation,
    }
  },
})
</script>

<template>
  <div>
    <p v-html="displayString" />
    <div v-if="string.length > maxLength">
      <button v-if="truncated" @click="toggleTruncation">
        {{ $t('general.showMore') }}
      </button>
      <button v-if="!truncated" @click="toggleTruncation">
        {{ $t('general.showLess') }}
      </button>
    </div>
  </div>
</template>
