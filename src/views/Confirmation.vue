<template>
  <div class="main-bg">
    <confirmation-component />
  </div>
</template>

<script>
import confirmationComponent from '@/components/views/confirmation-component';

export default {
  name: 'home',
  components: {
    confirmationComponent,
  },
};
</script>
