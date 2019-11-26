import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    composerFields: [],
  },
  getters: {
    getFormData: state => state.composerFields,
  },
  mutations: {
    SET_COMPOSER_FIELDS(state, payload) {
      Vue.set(state, 'composerFields', payload);
    },
  },
  actions: {
  },
});
