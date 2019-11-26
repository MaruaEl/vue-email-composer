<template>
  <div class="main-bg">
    <email-composer />
  </div>
</template>

<script>
import emailComposer from '@/components/email-composer';

export default {
  name: 'home',
  components: {
    emailComposer,
  },
};
</script>
