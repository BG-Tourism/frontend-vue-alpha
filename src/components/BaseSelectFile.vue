<script>
import { computed, defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import exifr from 'exifr'

import places from '@/api/places'

import useFileSize from '@/utils/useFileSize'
import { convertDistance, findClosest } from '@/utils/useDistance'

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

    const i18n = useI18n()
    const uuid = UniqueID()
    const inputField = ref(null)
    const files = reactive([])
    const fileData = ref({})
    const inputFieldFiles = reactive([])
    const errorMessage = ref(null)

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
      if (errorMessage.value !== null && errorMessage.value.length > 0)
        return errorMessage.value
      else if (props.error !== undefined && props.error != null && props.error.length > 0)
        return props.error
      else
        return null
    })

    const handleFileChange = (event) => {
      files.splice(0)
      inputFieldFiles.splice(0)

      if (event.target.files.length > 0) {
        for (const file of event.target.files) {
          if (file.size > props.maxFileSize) {
            errorMessage.value = i18n.t('general.uploadForm.imageSize', { size: useFileSize(props.maxFileSize) })

            return
          }

          const FileBlob = new Blob([file], {
            name: file.name,
            type: file.type,
          })

          const fileURL = URL.createObjectURL(FileBlob)
          const img = new Image()
          img.src = fileURL

          img.addEventListener('load', () => {
            inputFieldFiles.push({
              file,
              fileName: file.name,
              fileBlob: fileURL,
              fileType: file.type,
            })

            const width = img.width
            const height = img.height

            exifr.parse(inputFieldFiles[0].fileBlob).then((output) => {
              errorMessage.value = null

              if (output === undefined)
                output = {}

              fileData.value.width = width || (output.ImageWidth ? output.ImageWidth : output.ExifImageWidth ? output.ExifImageWidth : null)
              fileData.value.height = height || (output.ImageHeight ? output.ImageHeight : output.ExifImageHeight ? output.ExifImageHeight : null)
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

              if (fileData.value.latitude && fileData.value.longitude) {
                const closestItem = findClosest(places, fileData.value.latitude, fileData.value.longitude)

                if (closestItem !== null)
                  console.log(JSON.stringify(closestItem), convertDistance(closestItem.distance))
              }

              emit('update:modelValue', inputFieldFiles)
            })
          })

          img.addEventListener('error', () => {
            errorMessage.value = i18n.t('general.uploadForm.imageCorrupted')
          })
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
  <div class="image-upload" :class="[isDisabled ? 'disabled' : '', files.length ? 'has-image' : '']">
    <div class="input-wrapper">
      <label for="file">
        <input id="file" type="file" :accept="`.${accept.split(',').join(',.')}`" @change="handleFileChange($event)">
      </label>

      <div class="details">
        <i class="icon-image" />
        <div class="file-label" v-html="$t('general.uploadForm.label')" />
        <div class="file-extensions">
          {{ accept.toUpperCase().split(',').slice(0, -1).join(', ') + (accept.indexOf(',') !== -1 ? ` ${$t('general.or')} ` : '') + accept.toUpperCase().split(',').slice(-1) }}, {{ $t('general.uploadForm.size', { size: useFileSize(maxFileSize) }) }}
        </div>
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

    <div v-if="files.length" class="selection">
      <div class="container">
        <div class="selection-image">
          <img :src="files[0].image" alt="">
        </div>
        <div class="selection-data">
          <div class="selection-title">
            {{ $t('general.uploadForm.data.title') }}
          </div>
          <ul>
            <li :class="files[0].exif.width !== null && files[0].exif.height !== null ? 'covered' : 'uncovered'">
              <div class="status">
                <i :class="files[0].exif.width !== null && files[0].exif.height !== null ? 'icon-check' : 'icon-close'" />
              </div>
              <div>
                {{ $t('general.uploadForm.data.sizes') }}:
                <span v-if="files[0].exif.width !== null && files[0].exif.height !== null">
                  <strong>{{ files[0].exif.width }} x {{ files[0].exif.height }}</strong>
                </span>
                <span v-else>
                  {{ $t('general.uploadForm.data.notAvailable') }}
                </span>
              </div>
            </li>
            <li :class="files[0].exif.latitude !== null && files[0].exif.longitude !== null ? 'covered' : 'uncovered'">
              <div class="status">
                <i :class="files[0].exif.latitude !== null && files[0].exif.longitude !== null ? 'icon-check' : 'icon-close'" />
              </div>
              <div>
                {{ $t('general.uploadForm.data.coords') }}:
                <span v-if="files[0].exif.latitude !== null && files[0].exif.longitude !== null">
                  <strong>{{ files[0].exif.latitude }}, {{ files[0].exif.longitude }}</strong>
                </span>
                <span v-else>
                  {{ $t('general.uploadForm.data.notAvailable') }}
                </span>
              </div>
            </li>
            <li :class="files[0].exif.make !== null && files[0].exif.model !== null ? 'covered' : 'uncovered'">
              <div class="status">
                <i :class="files[0].exif.make !== null && files[0].exif.model !== null ? 'icon-check' : 'icon-close'" />
              </div>
              <div>
                {{ $t('general.uploadForm.data.device') }}:
                <span v-if="files[0].exif.make !== null && files[0].exif.model !== null">
                  <strong>{{ files[0].exif.make }} {{ files[0].exif.model }}</strong>
                </span>
                <span v-else>
                  {{ $t('general.uploadForm.data.notAvailable') }}
                </span>
              </div>
            </li>
            <li :class="files[0].exif.createDate !== null ? 'covered' : 'uncovered'">
              <div class="status">
                <i :class="files[0].exif.createDate !== null ? 'icon-check' : 'icon-close'" />
              </div>
              <div>
                {{ $t('general.uploadForm.data.date') }}:
                <span v-if="files[0].exif.createDate !== null">
                  <strong>{{ $d(new Date(files[0].exif.createDate), 'long', String($i18n.locale)) }}</strong>
                </span>
                <span v-else>
                  {{ $t('general.uploadForm.data.notAvailable') }}
                </span>
              </div>
            </li>
          </ul>
          <p>{{ $t('general.uploadForm.adminApproval') }}</p>
        </div>
      </div>
      <div class="selection-choices">
        <button class="button big default with-icon" @click="handleFileRemove(index)">
          <i class="icon-refresh" />
          <span>{{ $t('general.uploadForm.change') }}</span>
        </button>

        <span>{{ $t('general.or') }}</span>

        <button class="button big blue with-icon">
          <i class="icon-save" />
          <span>{{ $t('general.uploadForm.upload') }}</span>
        </button>
      </div>
    </div>

    <div v-if="hasError" class="input-error">
      <p :id="`${uuid}-error`" v-html="hasError" />
    </div>
  </div>
</template>
