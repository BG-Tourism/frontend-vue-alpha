<template>
    <div class="container">
        <h1><span>404</span></h1>
        <h2>{{ $t('page.error.message') }}</h2>

        <BaseButton type="blue" element="router" route="Homepage">
            {{ $t('page.error.button') }}
        </BaseButton>
    </div>
</template>

<script>
    import { computed, defineComponent } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import BaseButton from '@/components/BaseButton.vue'

    export default defineComponent({
        components: {
            BaseButton
        },
        setup() {
            const i18n = useI18n()

            const pageTitle = computed(() => {
                return i18n.t('page.error.title')
            })

            useTitle(pageTitle)
        }
    })
</script>
