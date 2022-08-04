<template>
    <div :class="['form-radio', error ? 'danger' : '']">
        <label :for="uuid">
            <input v-bind="{ ...$attrs, onChange: updateValue }" :id="uuid" :checked="modelValue === value" type="radio" />

            <span class="text" v-html="label" />
            <span class="radio" />

            <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
                {{ error }}
            </BaseErrorMessage>
        </label>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

    import uniqueId from '@/helpers/uniqueId'
    import setupFormComponent from '@/helpers/setupFormComponent'

    export default defineComponent({
        name: 'BaseRadio',
        components: {
            BaseErrorMessage
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            value: {
                type: [String, Number],
                default: ''
            },
            error: {
                type: String,
                default: ''
            }
        },
        setup(props, context) {
            const uuid = uniqueId().getID()
            const { updateValue } = setupFormComponent(props, context)

            return {
                updateValue,
                uuid
            }
        }
    })
</script>
