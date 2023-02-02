<template>
    <div v-if="finder.popups.category.shown">
        <div
            :class="[
                'popup',
                'categories',
                finder.popups.category.state == 1 ? 'opening' : null,
                finder.popups.category.state == 2 ? 'closing' : null
            ]"
        >
            <div v-if="[1, 2].includes(finder.popups.category.state)" class="wrapper">
                <div class="close">
                    <button>
                        <span class="icon-holder">
                            <i class="icon-close" />
                        </span>
                        <span>{{ $t('general.close') }}</span>
                    </button>
                </div>
                <div ref="target" class="holder">
                    <div class="section-name">
                        <span>{{ $t('general.filters.categories') }}</span>
                    </div>
                    <ul class="section-content">
                        <li
                            v-for="category in categories"
                            :key="category"
                            :class="finder.loadings.selections ? 'disabled' : null"
                        >
                            <div class="action" @click="toggleSelection('category', category.slug)">
                                <button
                                    :class="[
                                        'checkbox',
                                        finder.selections.category.find((item) => item === category.slug) ? 'checked' : null
                                    ]"
                                />
                                <span>{{ category.locale[$i18n.locale].title }}</span>
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

    import categories from '@/api/categories'

    import { useFinderStore } from '@/stores/Finder'

    export default defineComponent({
        setup() {
            const finder = useFinderStore()
            const target = ref(null)

            const handleClose = () => {
                finder.togglePopup('category')
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
                categories,
                target,
                toggleSelection,
                handleClose
            }
        }
    })
</script>
