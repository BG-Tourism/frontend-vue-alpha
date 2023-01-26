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
                    <router-link :to="{ name: 'Region', params: { slug: 'trakia' } }">
                        {{ $t('general.navigation.region', { title: district.region.locale[$i18n.locale].title }) }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'District', params: { slug: district.slug } }">
                        {{ $t('general.navigation.district', { title: district.locale[$i18n.locale].title }) }}
                    </router-link>
                </li>
            </ul>
        </div>
    </section>

    <div class="page-content">
        <div class="page-container">
            <div class="title">
                <h1>{{ district.locale[$i18n.locale].title }}</h1>
                <p>{{ district.locale[$i18n.locale].description }}</p>
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

            const district = {
                slug: 'pazardzhik',
                locale: {
                    bg: {
                        title: 'Пазарджик',
                        description:
                            'Пазарджишка област, която включва общините Лесичово, Пазарджик, Пещера и Септември, има богата история, датираща от дълбока древност. Районът е заселен от траките и по-късно завладян от римляните. Пазарджик е известен и с минералните си извори и от векове е популярна спа дестинация.'
                    },
                    en: {
                        title: 'Pazardzhik',
                        description:
                            'Pazardzhik region, which includes the municipalities of Lesichovo, Pazardzhik, Pestera, and September, has a rich history dating back to ancient times. The area was settled by the Thracians and later conquered by the Romans. Pazardzhik is also known for its mineral springs and has been a popular spa destination for centuries.'
                    }
                },
                region: {
                    slug: 'trakia',
                    locale: {
                        bg: {
                            title: 'Тракия'
                        },
                        en: {
                            title: 'Trakia'
                        }
                    }
                }
            }

            useTitle(pageTitle)

            return {
                district
            }
        }
    })
</script>
