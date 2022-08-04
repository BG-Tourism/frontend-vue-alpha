<template>
    <div class="logo">
        <router-link :to="{ name: 'Homepage' }">
            <span class="name">{{ appName }}</span>
        </router-link>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup() {
            const appName = import.meta.env.VITE_APP_NAME

            return {
                appName
            }
        }
    })
</script>
