<template>
  <div class="uploader">
      <label
        class="uploader__label"
      >
        <slot />
        <input
          ref="file"
          :name="name"
          :accept="accept"
          type="file"
          class="uploader__input"
          multiple="multiple"
          @change="$emit('onUpload', $event)"
        >
      </label>
    </div>
</template>
<script>
export default {
  name: 'UploadComponent',
  props: {
    name: {
      type: String,
      default: 'file',
      required: false,
    },
    accept: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
<style lang="scss">
.uploader {

  &__input {
    display: block;
    opacity: 0;
    height: 0;
    width: 0;
    &:focus {
      outline: none;
    }
  }
}
</style>
