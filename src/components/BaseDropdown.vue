<template>
    <div ref="dropdownEl" :class="['dropdown-holder', classes ? classes : null]">
        <div class="dropdown-toggle" @click.prevent="open = !open">
            <slot name="button" />
        </div>
        <div :class="['dropdown-container', placement ? 'placement-' + placement : null, open ? 'active' : null]">
            <slot v-if="open" name="menu" />
        </div>
    </div>
</template>

<script>
    import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

    export default defineComponent({
        name: 'BaseDropdown',
        inheritAttrs: false,
        props: {
            /**
             * List of dropdown classes
             * @type String
             * @default
             * @name classes
             */
            classes: {
                type: String,
                default: ''
            },
            /**
             * Determinates the dropdown placement
             * @type String
             * @default
             * @name placement
             */
            placement: {
                type: String,
                default: ''
            }
        },
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
