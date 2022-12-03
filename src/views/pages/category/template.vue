<template>
    <div class="page-content">
        <div class="page-container">
            <div class="container-title">
                <h1>{{ $t('page.category.pageTitle') }}</h1>
            </div>
            <div class="container-content padding">
                <p>{{ $route.params.category }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, defineComponent } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('page.category.pageTitle') + titleSuffix
            })

            useTitle(pageTitle)
        }
    })
</script>
