<template>
    <footer class="page-footer">
        <div class="container">
            <p
                class="open-source"
                v-html="$t('general.footerOpenSource', { repo: 'https://github.com/BG-Tourism/frontend-ver2' })"
            />
            <div class="wrapper">
                <p>
                    &copy; {{ currentYear }}
                    <strong>{{ appName }}</strong>
                    - {{ $t('general.footerCopyright') }}.
                </p>
                <ul>
                    <li>
                        <router-link :to="{ name: 'TermsAndConditions' }">
                            {{ $t('page.terms.pageTitle') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'PrivacyPolicy' }">
                            {{ $t('page.privacy.pageTitle') }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BlockFooter',
        setup() {
            const appName = import.meta.env.VITE_APP_NAME
            const currentYear = new Date().getFullYear()

            return {
                currentYear,
                appName
            }
        }
    })
</script>
