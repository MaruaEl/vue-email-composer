import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import './assets/scss/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

// Register global component to be available globally witouth importing in single pages/components

const Components = [
  'ButtonComponent',
  'InputComponent',
];

Components.map(
  name => {
    // eslint-disable-next-line global-require
    const componentPath = require(`./components/global/${name}/index.vue`).default;
    return Vue.component(name, componentPath);
  },
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
