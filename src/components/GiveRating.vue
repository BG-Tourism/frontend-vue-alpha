<template>
    <div :class="['rating-container', hasError ? 'has-error' : '']">
        <div v-if="$slots.label" class="label">
            <slot name="label" />
        </div>

        <div v-for="n in 5" :key="n">
            <i v-if="n <= rating" class="icon-star-solid" @click="updateRating(n)"></i>
            <i v-else class="icon-star" @click="updateRating(n)"></i>
        </div>

        <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
            {{ error }}
        </BaseErrorMessage>
    </div>
</template>

<script>
    import { computed, defineComponent, ref } from 'vue'

    import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

    import UniqueID from '@/helpers/uniqueId'
    import setupFormComponent from '@/helpers/setupFormComponent'

    export default defineComponent({
        name: 'GiveRating',
        components: {
            BaseErrorMessage
        },
        inheritAttrs: false,
        props: {
            /**
             * The error message of the input
             * @type String
             * @default ''
             * @name error
             */
            error: {
                type: String,
                default: ''
            }
        },
        setup(props, context) {
            const uuid = UniqueID().getID()
            const { updateValue } = setupFormComponent(props, context)
            const rating = ref(0)

            const updateRating = (stars) => {
                rating.value = stars
            }

            const hasError = computed(() => {
                if (props.error != undefined && props.error != null && props.error.length > 0) {
                    return props.error
                } else {
                    return null
                }
            })

            return {
                rating,
                updateRating,
                hasError
            }
        }
    })
</script>

<style>
    i {
        cursor: pointer;
        color: orange;
    }
</style>
