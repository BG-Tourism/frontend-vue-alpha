<template>
    <div ref="dropdownEl" class="dropdown-holder">
        <div class="dropdown-toggle" @click.prevent="open = !open">
            <slot name="button" />
        </div>
        <div :class="['dropdown-container', open ? 'active' : null]">
            <slot v-if="open" name="menu" />
        </div>
    </div>
</template>

<script>
    import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

    export default defineComponent({
        name: 'BaseDropdown',
        setup() {
            const dropdownEl = ref(null)
            const open = ref(false)

            const listener = (event) => {
                let target = event.target

                if (!open.value) return

                if (dropdownEl.value && dropdownEl.value.contains(target)) return

                open.value = false
            }

            onMounted(() => {
                window.addEventListener('focusin', listener)
                window.addEventListener('mousedown', listener)
            })

            onUnmounted(() => {
                window.removeEventListener('focusin', listener)
                window.removeEventListener('mousedown', listener)
            })

            return {
                open,
                dropdownEl
            }
        }
    })
</script>
