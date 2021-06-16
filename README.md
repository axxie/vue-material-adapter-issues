# Purpose

Demonstrate issue with using vue-material-adapter with yarn 2
Plug'n'Play.

# Issue

vue-material-adapter uses packages from "Material Components for the
web" (prefixed with @material/), but it doesn't list individual packages
as dependencies. Vue-material-adapter lists material-components-web
package as a dependency, but with yarn 2 Plug'n'play it is not enough.
Plug'n'play requires a package to list all packages it uses even if they
are already included as a transitive dependency.

# Actual result

The following errors are produced when running `yarn build`:

```
 error  in ./.yarn/$$virtual/vue-material-adapter-virtual-ad6ef94fe0/0/cache/vue-material-adapter-npm-2.0.2-f7f440219e-e2a6201f2c.zip/node_modules/vue-material-adapter/dist/vue-material-adapter.esm.js

Module not found: Error: Can't resolve '@material/banner' in '<path>\.yarn\$$virtual\vue-material-adapter-virtual-ad6ef94fe0\0\cache\vue-material-adapter-npm-2.0.2-f7f440219e-e2a6201f2c.zip\node_modules\vue-material-adapter\dist'

 error  in ./.yarn/$$virtual/vue-material-adapter-virtual-ad6ef94fe0/0/cache/vue-material-adapter-npm-2.0.2-f7f440219e-e2a6201f2c.zip/node_modules/vue-material-adapter/dist/vue-material-adapter.esm.js

Module not found: Error: Can't resolve '@material/dom/events' in '<path>\.yarn\$$virtual\vue-material-adapter-virtual-ad6ef94fe0\0\cache\vue-material-adapter-npm-2.0.2-f7f440219e-e2a6201f2c.zip\node_modules\vue-material-adapter\dist'
```


# Workaround

Add the following lines to .yarnrc.yml:

```yaml
packageExtensions:
  "vue-material-adapter@*":
    dependencies:
      "@material/animation": "^10.0.0"
      "@material/auto-init": "^10.0.0"
      "@material/banner": "^10.0.0"
      "@material/base": "^10.0.0"
      "@material/button": "^10.0.0"
      "@material/card": "^10.0.0"
      "@material/checkbox": "^10.0.0"
      "@material/chips": "^10.0.0"
      "@material/chips/trailingaction": "^10.0.0"
      "@material/circular-progress": "^10.0.0"
      "@material/data-table": "^10.0.0"
      "@material/density": "^10.0.0"
      "@material/dialog": "^10.0.0"
      "@material/dom": "^10.0.0"
      "@material/drawer": "^10.0.0"
      "@material/elevation": "^10.0.0"
      "@material/fab": "^10.0.0"
      "@material/feature-targeting": "^10.0.0"
      "@material/floating-label": "^10.0.0"
      "@material/form-field": "^10.0.0"
      "@material/icon-button": "^10.0.0"
      "@material/image-list": "^10.0.0"
      "@material/layout-grid": "^10.0.0"
      "@material/line-ripple": "^10.0.0"
      "@material/linear-progress": "^10.0.0"
      "@material/list": "^10.0.0"
      "@material/menu": "^10.0.0"
      "@material/menu-surface": "^10.0.0"
      "@material/notched-outline": "^10.0.0"
      "@material/progress-indicator": "^10.0.0"
      "@material/radio": "^10.0.0"
      "@material/ripple": "^10.0.0"
      "@material/rtl": "^10.0.0"
      "@material/segmented-button": "^10.0.0"
      "@material/select": "^10.0.0"
      "@material/shape": "^10.0.0"
      "@material/slider": "^10.0.0"
      "@material/snackbar": "^10.0.0"
      "@material/switch": "^10.0.0"
      "@material/tab": "^10.0.0"
      "@material/tab-bar": "^10.0.0"
      "@material/tab-indicator": "^10.0.0"
      "@material/tab-scroller": "^10.0.0"
      "@material/textfield": "^10.0.0"
      "@material/theme": "^10.0.0"
      "@material/tooltip": "^10.0.0"
      "@material/top-app-bar": "^10.0.0"
      "@material/touch-target": "^10.0.0"
      "@material/typography": "^10.0.0"
```
