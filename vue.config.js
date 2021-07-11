const path = require("path");


class CustomAlias {
  
  constructor(source, options, target) {
    this.packagesPath = path.resolve(require.resolve('vue-material-adapter/packages/base') + '/../..')
  }

  apply(resolver) {
    var target = resolver.ensureHook('resolve');
    resolver.getHook('resolve').tapAsync('CustomAlias', (request, resolveContext, callback) => {
      if (request.request[0] === '~' && request.context.issuer.startsWith(this.packagesPath)) {
        var req = request.request.substr(1);
        var obj = Object.assign({}, request, {
            request: this.packagesPath + '/' + req
        });
        return resolver.doResolve(target, obj, null, resolveContext, callback);
      }
      callback();
    });
  }
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname,'node_modules')]
        }
      }
    }
  },
  chainWebpack: config => {
     config.resolve.plugin('custom-alias').use(CustomAlias);
  }
};
