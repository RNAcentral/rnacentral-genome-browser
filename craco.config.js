module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.filename = "genome-browser.js";

      const styleLoaderConfig = {
        loader: 'style-loader',
        options: {
          injectType: 'singletonStyleTag',
          insert: function insertAtTop(element) {
            window.setTimeout(function() {
              var instance = document.querySelector('rnacentral-genome-browser');
              instance.shadowRoot.appendChild(element);
            });
          },
        },
      };

      for (const rule of webpackConfig.module.rules) {
        if (rule.oneOf && Array.isArray(rule.oneOf)) {
          for (const subRule of rule.oneOf) {
            const pattern = (subRule.test || '').toString();
            if (
              [
                /\.css$/.toString(),
                /\.(scss|sass)$/.toString(),
                /\.module\.css$/.toString(),
                /\.module\.(scss|sass)$/.toString(),
              ].includes(pattern)
            ) {
              subRule.use = subRule.use.filter(item => {
                if (typeof item === 'string') {
                  // Dev Mode
                  return !item.includes('style-loader');
                } else if (item.loader) {
                  // Build Mode
                  return !item.loader.includes('mini-css-extract-plugin');
                }
                return true;
              });
              subRule.use.unshift(styleLoaderConfig);
            }
          }
        }
      }

      return webpackConfig;
    },
  },
};