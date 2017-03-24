module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
      filename:'./public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
