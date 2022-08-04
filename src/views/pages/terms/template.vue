<template>
    <div class="page-content">
        <div class="page-container">
            <div class="container-title">
                <h1>{{ $t('page.terms.pageTitle') }}</h1>
            </div>
            <div class="container-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus exercitationem ducimus eaque,
                    unde nemo consectetur reprehenderit ratione sunt minus sed vitae ex pariatur ipsum, omnis corrupti maxime
                    incidunt temporibus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus exercitationem ducimus eaque,
                    unde nemo consectetur reprehenderit ratione sunt minus sed vitae ex pariatur ipsum, omnis corrupti maxime
                    incidunt temporibus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus exercitationem ducimus eaque,
                    unde nemo consectetur reprehenderit ratione sunt minus sed vitae ex pariatur ipsum, omnis corrupti maxime
                    incidunt temporibus!
                </p>
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
                return i18n.t('page.terms.pageTitle') + titleSuffix
            })

            useTitle(pageTitle)
        }
    })
</script>
