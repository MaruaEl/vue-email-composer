# Vue email Composer
![](./public/img/readme-img.png)
This is Vue email composer is built using Vuetify, a Material Design based Framework, a reusable semantic component framework for Vue.js
The project was initialized using Vue Cli-3.

The form data is handled using a simple Vuex store with no modules.

I've Used global reusable components for good practice, actions are dispatched from the parent view.
vue.config.js loada the `main.scss` file and makes the global styles available globally - to avoid an import in every component.

Testing made using the [vue-test utility](https://vue-test-utils.vuejs.org/)

-----

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn run dev
```
### Run tests

```
yarn test:unit
```

See Vuetify docs [Docs Reference](https://vuetifyjs.com/en/getting-started/).

See [Configuration Reference](https://cli.vuejs.org/config/).
