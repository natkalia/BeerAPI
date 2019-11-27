const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: distDir
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  })],
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: distDir
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
    }
    ]
  },
  
};