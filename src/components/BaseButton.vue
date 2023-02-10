<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    element: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'button', // for <button> tag
          'router', // for <router-link> tag
          'anchor', // for <a> tag
        ].includes(value)
      },
    },
    /**
     * Required if using 'router' element
     **/
    route: {
      type: String,
      default: 'UserDashboard',
    },
    /**
     * Optional if using 'router' element
     **/
    toHash: {
      type: String,
    },
    /**
     * Optional if using 'router' element
     **/
    params: {
      type: Object,
    },
    /**
     * Required if using 'anchor' element
     **/
    href: {
      type: String,
      default: '#',
    },
    /**
     * Optional if using 'anchor' element
     **/
    target: {
      type: String,
    },
    title: {
      type: String,
    },
    /**
     * Optional if using 'button' element
     **/
    submit: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'big',
      validator: (value) => {
        return ['big', 'small', 'mini'].includes(value)
      },
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return [
          'default',
          'borderless',
          'borderless-disabled',
          'disabled',
          'blue',
          'blue-outlined',
          'blue-loading',
          'blue-disabled',
          'green',
          'green-outlined',
          'green-loading',
          'green-disabled',
          'yellow',
          'yellow-outlined',
          'red',
          'red-outlined',
          'red-borderless',
          'red-disabled',
          'custom',
          'custom-icon',
          'only-icon',
        ].includes(value)
      },
    },
    /**
     * Required if using 'custom-icon' type
     **/
    icon: {
      type: String,
    },
    /**
     * If you want to use a custom SVG icon instead of the IcoMoon icon set, you should use this prop
     **/
    svgIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      /**
         * The button text will not display if some of these types appear, instead of that an icon and/or animation will show up
         **/
      exceptions: ['only-icon', 'custom-icon', 'blue-loading', 'green-disabled', 'red-disabled'],
    }
  },
})
</script>

<template>
  <button
    v-if="element === 'button'"
    class="button" :class="[type !== 'custom' ? size : '', type, icon || svgIcon ? 'with-icon' : '']"
    :disabled="['disabled', exceptions].includes(type)"
    :type="submit ? 'submit' : 'button'"
    :title="title"
  >
    <span v-if="icon || svgIcon" class="icon-holder">
      <i v-if="icon" :class="icon" />
      <slot v-else-if="svgIcon" name="icon" />
    </span>

    <slot v-if="!exceptions.includes(type)" />
  </button>

  <router-link
    v-else-if="element === 'router'"
    :to="{ name: route, hash: toHash ? `#${toHash}` : '', params: params ? params : null }"
    class="button" :class="[type !== 'custom' ? size : '', type, icon || svgIcon ? 'with-icon' : '']"
    :target="target"
    :title="title"
    rel="noopener"
  >
    <span v-if="icon || svgIcon" class="icon-holder">
      <i v-if="icon" :class="icon" />
      <slot v-else-if="svgIcon" name="icon" />
    </span>

    <slot v-if="!exceptions.includes(type)" />
  </router-link>

  <a
    v-else-if="element === 'anchor'"
    :href="href"
    class="button" :class="[type !== 'custom' ? size : '', type, icon || svgIcon ? 'with-icon' : '']"
    :target="target"
    :title="title"
    rel="noopener"
  >
    <span v-if="icon || svgIcon" class="icon-holder">
      <i v-if="icon" :class="icon" />
      <slot v-else-if="svgIcon" name="icon" />
    </span>

    <slot v-if="!exceptions.includes(type)" />
  </a>
</template>
