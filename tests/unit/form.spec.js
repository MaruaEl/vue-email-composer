// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { shallowMount } from '@vue/test-utils';
import EmailComposer from '@/components/email-composer';

// Components

describe('EmailComposer.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it('it does not display attachments if there are no attachments', () => {
    const wrapper = shallowMount(EmailComposer, {
      stubs: ['button-component', 'input-component'],
    });
    wrapper.setData({ uploadedFiles: [] });
    expect(wrapper.find('.image-uploade').exists()).toBe(false);
  });
});
