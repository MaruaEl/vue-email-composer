// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';


// Utilities
<<<<<<< HEAD
import { shallowMount } from '@vue/test-utils';
import EmailComposer from '@/components/email-composer';

// Components

describe('EmailComposer.vue', () => {
=======
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import ButtonComponent from '@/components/global/ButtonComponent';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('ButtonComponent.vue', () => {
  let vuetify;
>>>>>>> 483d9ac3c0b2230c529d97952fb04a6aee2582a3
  beforeEach(() => {
    Vue.use(Vuetify);
  });

<<<<<<< HEAD
  it('it does not display attachments if there are no attachments', () => {
    const wrapper = shallowMount(EmailComposer, {
      stubs: ['button-component', 'input-component'],
    });
    wrapper.setData({ uploadedFiles: [] });
    expect(wrapper.find('.image-uploade').exists()).toBe(false);
=======
  it('It should have a button text', () => {
    const text = 'Send';
    const wrapper = shallowMount(ButtonComponent, {
      localVue,
      vuetify,
      propsData: {
        buttonText: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
>>>>>>> 483d9ac3c0b2230c529d97952fb04a6aee2582a3
  });
});
