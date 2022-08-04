<template>
    <BlockHeader v-if="$route.name != 'PageError'" />

    <main :class="$route.meta.className">
        <router-view :key="$route.path" />
    </main>

    <BlockFooter v-if="$route.name != 'PageError'" />
</template>

<script>
    import { defineComponent } from 'vue'

    import BlockHeader from '@/views/layouts/header/template.vue'
    import BlockFooter from '@/views/layouts/footer/template.vue'

    export default defineComponent({
        components: {
            BlockHeader,
            BlockFooter
        }
    })
</script>

<style lang="scss">
    @import './assets/app.scss';
</style>
