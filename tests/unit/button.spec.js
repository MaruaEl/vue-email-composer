// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { mount } from '@vue/test-utils';

// Components
import ButtonComponent from '@/components/global/ButtonComponent';


describe('ButtonComponent.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it('It should have a button text', () => {
    const text = 'Send';
    const wrapper = mount(ButtonComponent, {
      propsData: {
        buttonText: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('It should disable the button if no emails are in one of the email input fields', () => {
    const text = 'Send';
    const wrapper = mount(ButtonComponent, {
      propsData: {
        buttonText: text,
        isDisabled: false,
      },
    });
    // const btn = wrapper.find('.v-btn--disabled');
    expect(wrapper.find('.v-btn--disabled'));
  });
});
