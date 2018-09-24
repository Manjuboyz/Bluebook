const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
	publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // }
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      }
      // {
      //   test: /\.scss$/,
      //   use: [{
      //       loader: "style-loader" // creates style nodes from JS strings
      //     },
      //     {
      //       loader: "css-loader" // translates CSS into CommonJS
      //     },
      //     {
      //       loader: "sass-loader" // compiles Sass to CSS
      //     }]
      // }
    ]
  },
  devServer: {
	  historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // })
    new MiniCssExtractPlugin({
            filename: "style.css"
    })
  ],
  mode : devMode ? 'development' : 'production'
};
