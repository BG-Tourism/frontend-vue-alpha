<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'TabsList',
  inheritAttrs: true,
  setup() {
    const container = ref(null)
    const state = reactive({
      isDragging: false,
      startX: 0,
      currentX: 0,
      scrollPosition: 0,
      containerWidth: 0,
    })

    const onMouseMove = (event) => {
      if (state.isDragging) {
        state.currentX = event.pageX - container.value.offsetLeft
        const diff = state.currentX - state.startX
        container.value.scrollLeft = state.scrollPosition - diff
      }
    }

    const onMouseUp = () => {
      state.isDragging = false
      state.scrollPosition = container.value.scrollLeft
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (event) => {
      state.isDragging = true
      state.startX = event.pageX - container.value.offsetLeft
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    const onTouchMove = (event) => {
      if (state.isDragging) {
        state.currentX = event.touches[0].pageX - container.value.offsetLeft
        const diff = state.currentX - state.startX
        container.value.scrollLeft = state.scrollPosition - diff
        // Prevent page scrolling while dragging
        event.preventDefault()
      }
    }

    const onTouchEnd = () => {
      state.isDragging = false
      state.scrollPosition = container.value.scrollLeft
      // Remove touchmove event listeners
      container.value.removeEventListener('touchmove', onTouchMove)
      document.body.removeEventListener('touchmove', onTouchMove)
    }

    const onTouchStart = (event) => {
      state.isDragging = true
      state.startX = event.touches[0].pageX - container.value.offsetLeft
      // Prevent page scrolling while dragging
      container.value.addEventListener('touchmove', onTouchMove)
      document.body.addEventListener('touchmove', onTouchMove, { passive: false })
    }

    // set the initial scroll position of the container div
    container.value && (state.containerWidth = container.value.offsetWidth)

    return {
      container,
      state,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    }
  },
})
</script>

<template>
  <ul
    ref="container"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <slot />
  </ul>
</template>
