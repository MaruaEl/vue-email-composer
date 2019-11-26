<template>
  <div>
    <v-text-field
      v-model="field"
      :type="inputType"
      :label="inputLabel"
      :placeholder="placeHoleder"
      :required="isRequired"
      :rules="setRule"
      :v-validate="requiredValid"
      :counter="setInputCounter"
      @input="$emit('returnInput', field)"
      outlined
    ></v-text-field>
  </div>
</template>

<script>

export default {
  name: 'InputComponent',
  mixins: ['validationMethods'],
  props: {
    inputType: {
      type: String,
      default: 'email',
      requried: false,
    },
    inputLabel: {
      type: String,
      default: 'Write your text here',
      requried: false,
    },
    isCounter: {
      type: [Number, Boolean],
      default: false,
      requried: false,
    },
    placeHoleder: {
      type: String,
      default: '',
      requried: false,
    },
    error: {
      type: Boolean,
      default: false,
      requried: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
      requried: false,
    },
    requiredValid: {
      type: String,
      default: '',
      required: false,
    },
    setRule: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  data() {
    return {
      field: '',
    };
  },
  computed: {
    setInputCounter() {
      return this.isCounter;
    },
  },
};
</script>
