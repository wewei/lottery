import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";
import _ from 'lodash';

const entry = {
  lottery: './src/lottery/index.js',
  register: './src/register/index.tsx',
};

export default {
  entry,
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '/',
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/css",
          to: "./css"
        },
        {
          from: "./src/data",
          to: "./data"
        },
        {
          from: "./src/img",
          to: "./img"
        },
        {
          from: "./src/lib",
          to: "./lib"
        }
      ],
    }),
    ..._.keys(entry).map(ent => new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/${ent}/index.html`),
      filename: path.resolve(__dirname, `dist/${ent}/index.html`),
      chunks: [ent],
      minify: {
        // 移除空属性
        removeEmptyAttributes: true,
        // 压缩css
        minifyCSS: true,
        // 压缩JS
        minifyJS: true,
        // 移除空格
        collapseWhitespace: true
      },
      hash: true,
      inject: true
    })),
  ],
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    proxy: {
      "*": "http://localhost:18888",
    },
  },
  devtool: "source-map",
};
