<template>
    <ul class="navigation">
        <li>
            <router-link :to="{ name: 'Homepage' }" class="link">
                <span>{{ $t('page.homepage.pageTitle') }}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({})
</script>
