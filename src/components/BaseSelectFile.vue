<script>
import { computed, defineComponent, reactive, ref } from 'vue'
import exifr from 'exifr'

import useFileSize from '@/utils/useFileSize'

export default defineComponent({
  name: 'BaseSelectFile',
  inheritAttrs: false,
  props: {
    /**
     * The label of the input
     * @type {String}
     * @default ''
     * @name label
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The unique identifier of the input
     * @type {String}
     * @default 'input'
     * @name name
     */
    name: {
      type: String,
      default: 'input',
    },
    /**
     * The file types that are accepted by the input
     * @type {String}
     * @default '.jpg'
     * @name accept
     */
    accept: {
      type: String,
      default: '.jpg',
    },
    /**
     * The maximum allowed file size in bytes
     * @type {Number}
     * @name maxFileSize
     */
    maxFileSize: {
      type: Number,
    },
    /**
     * Used to determinate if the input is in disabled state
     * @type Boolean
     * @default false
     * @name disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates if the input is required
     * @type {Boolean}
     * @default false
     * @name required
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * The error message to display when the input is invalid
     * @type {String}
     * @default ''
     * @name error
     */
    error: {
      type: String,
      default: '',
    },
    /**
     * The value of the input
     * @type {Array}
     * @name modelValue
     */
    modelValue: {
      type: Array,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    function UniqueID() {
      return `input-${Math.random().toString(20).substr(2, 5)}`
    }

    const uuid = UniqueID()
    const inputField = ref(null)
    const files = reactive([])
    const inputFieldFiles = reactive([])

    const isDisabled = computed(() => {
      return props.disabled
    })

    const isRequired = computed(() => {
      return props.required
    })

    const hasLabel = computed(() => {
      if (props.label !== undefined && props.label != null && props.label.length > 0)
        return props.label
      else
        return null
    })

    const hasError = computed(() => {
      if (props.error !== undefined && props.error != null && props.error.length > 0)
        return props.error
      else
        return null
    })

    const handleFileChange = (event) => {
      files.splice(0)
      inputFieldFiles.splice(0)

      if (event.target.files.length > 0) {
        for (const file of event.target.files) {
          const FileBlob = new Blob([file], {
            name: file.name,
            type: file.type,
          })

          const fileURL = URL.createObjectURL(FileBlob)

          inputFieldFiles.push({
            file,
            fileName: file.name,
            fileBlob: fileURL,
            fileType: file.type,
          })

          exifr.parse(inputFieldFiles[0].fileBlob).then((output) => {
            const fileData = ref({})

            fileData.value.width = output.ImageWidth ? output.ImageWidth : output.ExifImageWidth ? output.ExifImageWidth : null
            fileData.value.height = output.ImageHeight ? output.ImageHeight : output.ExifImageHeight ? output.ExifImageHeight : null
            fileData.value.latitude = output.latitude ? Number(output.latitude.toFixed(5)) : null
            fileData.value.longitude = output.longitude ? Number(output.longitude.toFixed(5)) : null
            fileData.value.make = output.Make ? output.Make : null
            fileData.value.model = output.Model ? output.Model : null
            fileData.value.createDate = output.CreateDate ? output.CreateDate : null

            console.log(JSON.stringify(output))

            files.push({
              name: file.name,
              extension: file.name.split('.').pop(),
              size: file.size,
              image: inputFieldFiles[0].fileBlob,
              exif: fileData.value,
            })
          })

          emit('update:modelValue', inputFieldFiles)
        }
      }
    }

    const handleFileRemove = (index) => {
      files.splice(index, 1)
      inputFieldFiles.splice(index, 1)

      emit('update:modelValue', inputFieldFiles)
    }

    const updateValue = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return {
      uuid,
      files,
      isDisabled,
      isRequired,
      inputField,
      inputFieldFiles,
      hasLabel,
      hasError,
      updateValue,
      handleFileRemove,
      handleFileChange,
      useFileSize,
    }
  },
})
</script>

<template>
  <div class="input-file-container" :class="[isDisabled ? 'disabled' : '', hasError ? 'has-error' : '']">
    <div v-if="hasLabel" class="label">
      <label :for="uuid" :class="required ? 'required' : ''">
        {{ label }}
      </label>
    </div>
    <div class="input-wrapper">
      <label for="file">
        <input id="file" type="file" :accept="`.${accept.split(',').join(',.')}`" @change="handleFileChange($event)">
      </label>

      <div class="details">
        <span class="file-title">{{ $t('form.fileExtensions') }}</span>
        <span class="file-extensions">
          {{ $t('modal.userForm.text.fileExtensions', [accept.split(',').join(', ')]) }}
        </span>
      </div>

      <input
        v-bind="{ ...$attrs, onInput: updateValue }"
        :id="uuid"
        ref="inputField"
        tabindex="0"
        :name="name"
        :value="modelValue"
        :required="isRequired"
        :aria-required="isRequired ? 'true' : false"
        :disabled="isDisabled"
        :aria-disabled="isDisabled ? 'true' : false"
        readonly
        class="hidden"
      >
    </div>

    <ul v-if="files.length > 0" class="list">
      <li
        v-for="(file, index) in files"
        :key="index"
        :class="[!accept.includes(file.extension) ? 'danger' : '', file.size > maxFileSize ? 'danger' : '']"
      >
        <pre>{{ file }}</pre>

        <img :src="file.image" alt="">

        <span class="name" :title="file.name">{{ file.name }}</span>
        <span class="size">({{ useFileSize(file.size) }})</span>

        <button @click="handleFileRemove(index)">
          <i class="icon-delete" />
          <span>{{ $t('button.remove') }}</span>
        </button>
      </li>
    </ul>

    <div v-if="error" class="input-error">
      <p :id="`${uuid}-error`" v-html="error" />
    </div>
  </div>
</template>
