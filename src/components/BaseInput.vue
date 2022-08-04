<template>
    <div :class="['form-input', error ? 'danger' : '']">
        <label v-if="label" :for="uuid" :class="required ? 'required' : ''">
            {{ label }}
        </label>

        <input
            :id="uuid"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            v-bind="{ ...$attrs, onInput: updateValue }"
        />

        <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
            {{ error }}
        </BaseErrorMessage>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

    import uniqueId from '@/helpers/uniqueId'
    import setupFormComponent from '@/helpers/setupFormComponent'

    export default defineComponent({
        name: 'BaseInput',
        components: {
            BaseErrorMessage
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            required: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            error: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        setup(props, context) {
            const { updateValue } = setupFormComponent(props, context)
            const uuid = uniqueId().getID()

            return {
                updateValue,
                uuid
            }
        }
    })
</script>
