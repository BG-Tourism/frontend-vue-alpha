<template>
    <span :id="id" class="message">
        <slot />
    </span>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BaseErrorMessage',
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        }
    })
</script>
