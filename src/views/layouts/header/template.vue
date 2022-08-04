<template>
    <header class="page-header">
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
        }
    })
</script>
