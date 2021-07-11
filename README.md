# Purpose

Demonstrate issue with bundle size when using vue-material-adapter.

## Description

The built bundle includes all components from vue-material-adapter and from @material.

## Steps to reproduce

1. Create project with vue and vue-material-adapter. Only use button, dialog and snackbar components.
2. Build the bundle by using the following command:
```bash
vue-cli-service build --report
```

> Note: you may need to add full bath to node_modules/.bin in front of vue-cli-service command to make it work.

3. Check the bundle size and the report.html in the `dist` directory. When viewing the `report.html` make sure that "Show content of concatenated modules (inaccurate)" checkbox is selected.

The demo repository with reproduction is available here: https://github.com/axxie/vue-material-adapter-issues/tree/bundle-size-issue. The demo is based on the basic-vue-cli example.

To reproduce the issue with the demo repo, run the following commands in the terminal:

```bash
git clone https://github.com/axxie/vue-material-adapter-issues.git -b bundle-size-issue
cd vue-material-adapter-issues
npm install
vue-cli-service --report
``` 

## Expected result

The bundle includes only button, dialog, snackbar and their dependencies.

## Actual result

The bundle includes all of the vue-material-adapter and all the @material components.

# Details

Just to make sure that tree-shaking works, the `main.js` in the [demo repository](https://github.com/axxie/vue-material-adapter-issues/tree/bundle-size-issue) contains the following lines:

```javascript
import { square, cube } from './math';
...
console.log(square(2));
```

One can manually inspect `app.<hash>.js` file in the `dist` directory. It only contains `square` function (look for "n*n" string), but doesn't contain `cube` function.

# Workaround

Import individual components from the vue-material-adapter package, like below:
```javascript
import button from 'vue-material-adapter/packages/button';
import dialog from 'vue-material-adapter/packages/dialog';
import snackbar from 'vue-material-adapter/packages/snackbar';

import App from './App.vue';

// mount app
const app = createApp({
  render: () => h(App),
});

app.use(button);
app.use(dialog);
app.use(snackbar);
```

This solution requires using custom resover for webpack. This is because individual components within the vue-material-adapter package contain raw unprocessed sources. The use specialized import with their own resolution rules based on the presence of the tilde character (`~`).

The demo of the workaround can be found in this repository in the bundle-size-issue-workaround branch.
