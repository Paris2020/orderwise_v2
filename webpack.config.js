/*const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/scss/_style.scss'),
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: "/css",
        filename:  'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'style-loader',
                    'css-loader', 
                    'sass-loader'
                ]
            },

        ]
    },
    plugins: [
        // Where the compiled SASS is saved to
        new MiniCssExtractPlugin({
            filename: './public/css/style.css',
        })
    ],
};*/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    static: './dist/index.html',
    hot: true,
  },
};