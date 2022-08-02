const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodEnv = process.env.NODE_ENV === "production";

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    main: "./js/main.js"
  },
  mode: prodEnv ? "production" : "development",

  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]"
  },

  devtool: prodEnv ? "source-map" : "inline-source-map",
  devServer: {
    open: true,
    host: "localhost",
    port: 5550,
    static: "./dist",
    compress: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/i,
        exclude: new RegExp("node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource"
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
      })
    ],
    minimize: prodEnv
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      title: "BMI Calculator"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
