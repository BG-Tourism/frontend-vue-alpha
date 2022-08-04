<template>
    <div class="user-menu">
        <div class="person">
            <div class="details">
                <span>{{ $t('general.welcome') }}</span>
                <strong>{{ user.name.split(' ')[0] }}</strong>
            </div>
            <div class="avatar">
                <img :src="'https://gravatar.com/avatar/' + md5(user.email) + '?size=40'" :alt="user.name" loading="lazy" />
            </div>
        </div>

        <div class="divider" />

        <BaseDropdown class="language">
            <template #button>
                <i class="icon-languages" />
            </template>
            <template #menu>
                <ul class="dropdown-menu">
                    <li v-for="(language, index) in getSupportedLocales()" :key="index">
                        <button :class="$i18n.locale === language.code ? 'active' : ''" @click="changeLocale(language.code)">
                            {{ language.name }}
                        </button>
                    </li>
                </ul>
            </template>
        </BaseDropdown>

        <BaseButton
            :title="isDark ? $t('general.colorMode.toggleToLight') : $t('general.colorMode.toggleToDark')"
            type="custom"
            :icon="isDark ? 'icon-day' : 'icon-night'"
            class="color-mode"
            @click="toggleDark()"
        />

        <div class="divider" />

        <BaseButton title="Настройки" type="custom" icon="icon-settings" class="settings" />
        <BaseButton title="Изход" type="custom" icon="icon-logout" class="logout" />
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useDark, useToggle } from '@vueuse/core'
    import { useRoute } from 'vue-router'
    import md5 from 'js-md5'

    import BaseButton from '@/components/BaseButton.vue'
    import BaseDropdown from '@/components/BaseDropdown.vue'

    import { getSupportedLocales, changeLocale } from '@/utils/locales'

    export default defineComponent({
        components: {
            BaseButton,
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
