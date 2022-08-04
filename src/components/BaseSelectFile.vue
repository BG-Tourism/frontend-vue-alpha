<template>
    <div :class="['form-selectfile', error ? 'danger' : '']">
        <div v-if="label" :class="['label', required ? 'required' : '']">
            {{ label }} {{ required ? '' : '(' + $t('form.optional') + ')' }}
        </div>

        <div class="area">
            <label for="file">
                <input id="file" type="file" :multiple="multiple" :accept="accept" @change="handleFileChange($event)" />
            </label>

            <div class="details">
                <span class="title">{{ multiple ? $t('form.fileUploadMultiple') : $t('form.fileUpload') }}</span>
                <span class="description">
                    {{ $t('form.fileExtensions') }}
                    <br />
                    {{ accept.split(',').join(', ') }}
                </span>
            </div>

            <input
                :id="uuid"
                type="text"
                :name="name"
                :value="modelValue"
                v-bind="{ ...$attrs, onInput: updateValue }"
                readonly
                class="hidden"
            />
        </div>

        <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
            {{ error }}
        </BaseErrorMessage>

        <ul v-if="files.length > 0" class="list">
            <li
                v-for="(file, index) in files"
                :key="index"
                :class="[!accept.includes(file.extension) ? 'danger' : '', file.size > maxFileSize ? 'danger' : '']"
            >
                <span class="name">{{ file.name }}</span>
                <span class="size">({{ fileSizeFormatter(file.size) }})</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { defineComponent, reactive } from 'vue'

    import BaseErrorMessage from '@/components/BaseErrorMessage.vue'

    import uniqueId from '@/helpers/uniqueId'
    import setupFormComponent from '@/helpers/setupFormComponent'
    import fileSizeFormatter from '@/helpers/fileSizeFormatter'

    export default defineComponent({
        name: 'BaseFileUpload',
        components: {
            BaseErrorMessage
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String
            },
            multiple: {
                type: Boolean,
                default: false
            },
            accept: {
                type: String
            },
            maxFileSize: {
                type: Number
            },
            required: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
                default: ''
            },
            modelValue: {
                type: Array
            }
        },
        emits: { 'update:modelValue': null },
        setup(props, context) {
            const { updateValue } = setupFormComponent(props, context)
            const uuid = uniqueId().getID()

            let files = reactive([])
            let inputFieldFiles = reactive([])

            const handleFileChange = (event) => {
                files.splice(0)
                inputFieldFiles.splice(0)

                if (event.target.files.length > 0) {
                    for (const file of event.target.files) {
                        files.push({
                            name: file.name,
                            size: file.size,
                            extension: file.name.split('.').pop()
                        })

                        const FileBlob = new Blob([file], {
                            name: file.name,
                            type: file.type
                        })

                        const fileURL = URL.createObjectURL(FileBlob)

                        inputFieldFiles.push({
                            file: file,
                            fileName: file.name,
                            fileBlob: fileURL,
                            fileType: file.type
                        })

                        context.emit('update:modelValue', inputFieldFiles)

                        // console.log(JSON.stringify(inputFieldFiles))
                    }
                }
            }

            return {
                uuid,
                updateValue,
                files,
                inputFieldFiles,
                handleFileChange,
                fileSizeFormatter
            }
        }
    })
</script>
