// .storybook/main.js
module.exports = {
  framework: {
    name: '@storybook/react-vite', // or @storybook/vue3-vite, etc. depending on your framework
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
};
