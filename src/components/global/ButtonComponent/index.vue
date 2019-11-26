<template>
  <v-btn
    :disabled="isDisabled"
    :type="buttonType"
    :color="setColor"
    :minWidth="minWidth"
    :height="setHeight"
    :to="setRouting"
    class="lighten-2 white--text"
    rounded
  ><slot />{{ buttonText }}</v-btn>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonText: {
      type: String,
      default: 'Submit',
      required: true,
    },
    buttonType: {
      type: String,
      default: 'button',
      required: false,
    },
    minWidth: {
      type: String,
      default: 'auto',
      required: false,
    },
    setHeight: {
      type: String,
      default: 'auto',
      required: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    setColor: {
      type: String,
      default: 'primary',
      required: false,
    },
    setRouting: {
      type: [Boolean, String],
      default: '',
      required: false,
    },
  },
};
</script>
