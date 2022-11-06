<template>
    <div class="user-menu">
        <div class="language">
            <BaseDropdown placement="right">
                <template #button>
                    <button>
                        <i class="icon-languages" />
                    </button>
                </template>
                <template #menu>
                    <ul class="dropdown-menu">
                        <li v-for="(language, index) in getSupportedLocales()" :key="index">
                            <a
                                href="javascript:void(0);"
                                :class="$i18n.locale === language.code ? 'active' : ''"
                                @click="changeLocale(language.code)"
                            >
                                <span>{{ language.name }}</span>
                            </a>
                        </li>
                    </ul>
                </template>
            </BaseDropdown>
        </div>

        <button
            :title="isDark ? $t('general.colorMode.toggleToLight') : $t('general.colorMode.toggleToDark')"
            class="color-mode"
            @click="toggleDark()"
        >
            <i :class="isDark ? 'icon-day' : 'icon-night'" />
        </button>

        <div class="divider" />

        <div class="user-details">
            <BaseDropdown placement="right">
                <template #button>
                    <button class="button">
                        <i class="icon-user" />
                    </button>
                </template>
                <template #menu>
                    <header>
                        <picture>
                            <img :src="'https://gravatar.com/avatar/' + md5(user.email) + '?size=50'" loading="lazy" />
                        </picture>
                        <div class="details">
                            <strong>{{ user.name }}</strong>
                            <span>{{ user.email }}</span>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <a href="javascript:void(0);">
                                <i class="icon-settings" />
                                <span>{{ $t('general.settings') }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="danger">
                                <i class="icon-logout" />
                                <span>{{ $t('general.logout') }}</span>
                            </a>
                        </li>
                    </ul>
                </template>
            </BaseDropdown>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useDark, useToggle } from '@vueuse/core'
    import { useRoute } from 'vue-router'
    import md5 from 'js-md5'

    import BaseDropdown from '@/components/BaseDropdown.vue'

    import { getSupportedLocales, changeLocale } from '@/utils/locales'

    export default defineComponent({
        components: {
            BaseDropdown
        },
        setup() {
            const route = useRoute()
            const isDark = useDark()
            const toggleDark = useToggle(isDark)
            const user = {
                name: 'Том Атанасов',
                email: 'tom.atanasov@delta.bg'
            }

            return {
                route,
                isDark,
                toggleDark,
                user,
                md5,
                getSupportedLocales,
                changeLocale
            }
        }
    })
</script>
