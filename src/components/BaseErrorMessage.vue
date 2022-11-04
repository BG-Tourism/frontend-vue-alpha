<template>
    <div :id="id" class="error-message">
        <slot />
    </div>
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
