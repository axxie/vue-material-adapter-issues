import { createApp, h } from 'vue';
import VueMaterialAdapter from 'vue-material-adapter';
import App from './App.vue';
import { square, cube } from './math';

// mount app
const app = createApp({
  render: () => h(App),
});

app.use(VueMaterialAdapter);

app.mount('#app');

console.log(square(2));
