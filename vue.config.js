const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-email-composer/'
    : '/',
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/scss/main.scss'),
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    },
  },
};
