<template>
    <header class="page-header">
        <div class="container">
            <BlockLogo />

            <BlockNavigation />

            <BlockUserMenu />
        </div>

        <div class="bg-blur" :style="{ opacity: opacity }"></div>
    </header>
</template>

<script>
    import { defineComponent, ref, onMounted } from 'vue'

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
            let opacity = ref(0)

            onMounted(() => {
                window.addEventListener('scroll', handleScroll)
            })

            const handleScroll = () => {
                if (window.pageYOffset > 0) {
                    opacity.value = 1
                } else {
                    opacity.value = 0
                }
            }

            return {
                opacity
            }
        }
    })
</script>
