const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel!eslint'
      }
    ]
  },
  // vue-loader config
  vue: {
    autoprefixer: {
      browsers: ['last 2 Chrome versions']
    },
    loaders: {
      js: 'babel',
      scss: 'style!css!sass'
    }
  },
  plugins: [
    // define plugins here
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ]
};
