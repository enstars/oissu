const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/build"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: require("svelte-preprocess")({
              // sourceMap: !production,
              postcss: {
                plugins: [require("autoprefixer")()],
              },
            }),
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 5000,
    hot: true,
    devMiddleware: {
      publicPath: "/public/",
      writeToDisk: true,
    },
  },
};
