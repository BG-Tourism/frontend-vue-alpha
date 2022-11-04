<template>
    <div class="page-content">
        <div class="page-container">
            <div class="container-title">
                <h1>{{ $t('page.homepage.pageTitle') }}</h1>
            </div>
            <div class="container-content">
                <BaseInput :placeholder="$t('general.settings')">
                    <template #prefix>
                        <i class="icon-settings" />
                    </template>
                </BaseInput>
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

    import BaseInput from '@/components/BaseInput.vue'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        components: {
            BaseInput
        },
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('page.homepage.pageTitle') + titleSuffix
            })

            useTitle(pageTitle)
        }
    })
</script>
