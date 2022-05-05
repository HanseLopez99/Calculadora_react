const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "main.[fullhash].bundle.css" }),
    new HtmlWebpackPlugin({
      title: 'Card Memory Game',
      template: './src/index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[fullhash].bundle.js',
    clean: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpe?g|jpg|png|gif|woff|woff2|eot|ttf|pdf|svg|mp4)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'Assets/Images',
          name: '[contenthash].[ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.mp3$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'Assets/Sounds',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};