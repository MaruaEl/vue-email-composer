<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex class="confirmation-block pa-10" xs12 md8 mx-auto>
        <main>
          <v-row align="center" justify="space-around">
            <v-avatar color="#4ad59b" size="120">
              <v-icon color="white" class="pa-5">fas fa-check</v-icon>
            </v-avatar>
          </v-row>
          <h1 align="center" class="headline display-3 ma-10">Your email has been sent</h1>

          <v-divider></v-divider>

          <p class="title mt-10">{{ getFormData.subject }}</p>
          <p v-if="getFormData.to" class="body-1">to:
            <span class="blue--text">{{ getFormData.to }}</span>
          </p>
          <p v-if="getFormData.cc" class="body-1">cc: {{ getFormData.cc }} </p>
          <p v-if="getFormData.bcc" class="body-1">bcc: {{ getFormData.bcc }} </p>

          <p class="text-left text-wrap mb-10">{{ getFormData.message }}</p>
          <v-card
            v-for="(imgSrc, index) in getFormData.attachmens"
            :key="index"
            class="d-inline-flex mr-5">
            <v-img
              :src="imgSrc"
              :maxWidth="'7rem'">
            </v-img>
          </v-card>
        </main>

        <button-component
          class="my-5"
          setRouting="/"
          setColor="#00bef0"
          setHeight="1.5rem"
          buttonText="Send new">
        </button-component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'confirmation',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getFormData']),
  },
};
</script>

<style lang="scss">
.confirmation-block {
  position: relative;
  background-color: #fff;
  border-radius: 7px;
}
</style>
