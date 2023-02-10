<template>
    <div v-if="finder.modals.region.shown">
        <div
            :class="[
                'modal',
                finder.modals.region.state == 1 ? 'opening' : null,
                finder.modals.region.state == 2 ? 'closing' : null
            ]"
        >
            <div v-if="[1, 2].includes(finder.modals.region.state)" class="wrapper">
                <div class="close">
                    <button>
                        <span class="icon-holder">
                            <i class="icon-close" />
                        </span>
                        <span>{{ $t('general.close') }}</span>
                    </button>
                </div>
                <div ref="target" class="finder-container">
                    <div class="section-name">
                        <span>{{ $t('general.filters.regionsAndLocalities') }}</span>
                    </div>
                    <ul class="section-content">
                        <li v-for="region in regions" :key="region" :class="finder.loadings.selections ? 'disabled' : null">
                            <div class="action" @click="toggleSelection('region', region.slug)">
                                <button
                                    :class="[
                                        'checkbox',
                                        finder.selections.region.find((item) => item === region.slug) ? 'checked' : null
                                    ]"
                                />
                                <span>{{ region.locale[$i18n.locale].title }}</span>
                            </div>
                            <div v-if="finder.selections.region.includes(region.slug)" class="localities">
                                <ul>
                                    <li
                                        v-for="locality in region.localities"
                                        :key="locality"
                                        :class="finder.loadings.selections ? 'disabled' : null"
                                    >
                                        <div class="action" @click="toggleSelection('locality', locality.slug)">
                                            <button
                                                :class="[
                                                    'checkbox',
                                                    finder.selections.locality.find((item) => item === locality.slug)
                                                        ? 'checked'
                                                        : null
                                                ]"
                                            />
                                            <span>{{ locality.locale[$i18n.locale].title }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <footer>
                        <p>{{ $t('general.filters.autosaving') }}</p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { onClickOutside, onKeyStroke } from '@vueuse/core'

    import regions from '@/api/regions'

    import { useFinderStore } from '@/stores/Finder'

    export default defineComponent({
        setup() {
            const finder = useFinderStore()
            const target = ref(null)

            const handleClose = () => {
                finder.toggleModal('region')
            }

            const toggleSelection = (type, item) => {
                finder.manageItem(type, item)
            }

            onKeyStroke('Escape', () => {
                handleClose()
            })

            onClickOutside(target, () => {
                handleClose()
            })

            return {
                finder,
                regions,
                target,
                toggleSelection,
                handleClose
            }
        }
    })
</script>
