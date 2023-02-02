<template>
    <nav class="navigation">
        <ul>
            <li>
                <router-link :to="{ name: 'Places' }" class="link">
                    <span>{{ $t('general.navigation.places') }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Categories' }" class="link">
                    <span>{{ $t('general.navigation.categories') }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Regions' }" class="link">
                    <span>{{ $t('general.navigation.regions') }}</span>
                </router-link>
            </li>

            <li class="divider"></li>

            <li>
                <router-link :to="{ name: 'About' }" class="link">
                    <span>{{ $t('page.about.title') }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Contact' }" class="link">
                    <span>{{ $t('page.contact.title') }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({})
</script>
