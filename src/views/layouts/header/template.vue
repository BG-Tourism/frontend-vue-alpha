<template>
    <header class="page-header">
        <section v-if="environment" :class="['top-line', environment]">
            <span v-html="$t('general.headerEnvironment.' + environment, { repo: gitRepository })" />
        </section>

        <div class="container">
            <BlockLogo />

            <BlockNavigation />

            <BlockUserMenu />
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue'

    import BlockLogo from '@/views/layouts/header/logo.vue'
    import BlockNavigation from '@/views/layouts/header/navigation.vue'
    import BlockUserMenu from '@/views/layouts/header/user-menu.vue'

    export default defineComponent({
        components: {
            BlockLogo,
            BlockNavigation,
            BlockUserMenu
        },
        setup() {
            const environment = import.meta.env.VITE_APP_ENV
            const gitRepository = import.meta.env.VITE_APP_GIT_REPO

            return {
                environment,
                gitRepository
            }
        }
    })
</script>
