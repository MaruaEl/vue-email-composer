// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';


// Utilities
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import ButtonComponent from '@/components/global/ButtonComponent';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('ButtonComponent.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

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
  });
});
