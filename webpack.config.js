import path from "path";
import PugPlugin from "pug-plugin";
import "webpack-dev-server";

export default {
  entry: {
    index: "./pug/index.pug",
  },
  output: {
    path: path.resolve("dist/"),
    publicPath: "/",
    filename: "js/main.js"
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      css: {
        filename: "css/main.css",
      },
    }),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|ico)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
  devServer: {
    open: true,
    port: 1337,
    hot: true,
    liveReload: true,
    static: {
      directory: path.resolve("dist"),
    },
    watchFiles: {
      paths: ["pug/**/*.*", "scss/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
};
