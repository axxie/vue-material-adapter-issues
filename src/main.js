import { createApp, h } from 'vue';
import button from 'vue-material-adapter/packages/button';
import dialog from 'vue-material-adapter/packages/dialog';
import snackbar from 'vue-material-adapter/packages/snackbar';

import App from './App.vue';
import { square, cube } from './math';

// mount app
const app = createApp({
  render: () => h(App),
});

app.use(button);
app.use(dialog);
app.use(snackbar);

app.mount('#app');

console.log(square(2));
