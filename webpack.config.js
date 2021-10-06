const path = require('path');
const APP_ENTRY = __dirname + "/src";

module.exports = {
  entry: './src/pull.js',
  output: {
    filename: 'pull.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve : {
    alias : {
      storejs : path.resolve(APP_ENTRY + '/store'),
      mouse : path.resolve(APP_ENTRY + '/mouse'),
      div : path.resolve(APP_ENTRY + '/div')
    }
  },
  devServer: {
    client : {
      overlay : false
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8000,
  }
};

