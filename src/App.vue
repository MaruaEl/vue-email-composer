<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import homeView from '@/components/email-composer';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
