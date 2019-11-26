// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';

// Components
import ButtonComponent from '@/components/global/ButtonComponent';

const localVue = createLocalVue();

describe('ButtonComponent.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('It should have a button text', () => {
    const wrapper = mount(ButtonComponent, {
      localVue,
      vuetify,
      propsData: {
        buttonText: 'Send',
      },
    });

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find('button');

    expect(title.text()).toBe('send');
  });

  it('should emit an event when the action v-btn is clicked', () => {
    const wrapper = mount(ButtonComponent, {
      localVue,
      vuetify,
    });

    const event = jest.fn();
    const button = wrapper.find('.v-btn');

    // Here we bind a listener to the wrapper
    // instance to catch our custom event
    // https://vuejs.org/v2/api/#Instance-Methods-Events
    wrapper.vm.$on('action-btn:clicked', event);

    expect(event).toHaveBeenCalledTimes(0);

    // Simulate a click on the button
    button.trigger('click');

    // Ensure that our mock event was called
    expect(event).toHaveBeenCalledTimes(1);
  });
});
