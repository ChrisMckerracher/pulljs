const path = require('path');
const APP_ENTRY = __dirname + "/src";

module.exports = {
  entry: {
    pull : './src/pull.js',
    example : './src/example.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve : {
    alias : {
      storejs : path.resolve(APP_ENTRY + '/store'),
      mouse : path.resolve(APP_ENTRY + '/mouse'),
      tension : path.resolve(APP_ENTRY + '/tension'),
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

