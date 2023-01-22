<template>
    <section class="category-heading">
        <div class="page-content">
            <ul class="breadcrumbs">
                <li>
                    <router-link :to="{ name: 'Homepage' }">
                        {{ $t('general.navigation.homepage') }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Regions' }">
                        {{ $t('general.navigation.regions') }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Region', params: { slug: $route.params.slug } }">
                        {{ $route.params.slug }}
                    </router-link>
                </li>
            </ul>
        </div>
    </section>

    <section class="category-heading">
        <div class="page-content">
            <div class="container-content">
                <pre>{{ $route }}</pre>
            </div>
        </div>
    </section>
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
                return i18n.t('page.region.pageTitle') + titleSuffix
            })

            useTitle(pageTitle)
        }
    })
</script>
