const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // If using the runtime only build
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  }
}

module.exports = {
    resolve: {
      alias: {
        // Alias for using source of BootstrapVue
        'bootstrap-vue$': 'bootstrap-vue/src/index.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // Exclude transpiling `node_modules`, except `bootstrap-vue/src`
          exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }

const options = {
transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
    'b-avatar': 'src',
    'b-img': 'src',
    'b-img-lazy': ['src', 'blank-src'],
    'b-card': 'img-src',
    'b-card-img': 'src',
    'b-card-img-lazy': ['src', 'blank-src'],
    'b-carousel-slide': 'img-src',
    'b-embed': 'src'
}
}