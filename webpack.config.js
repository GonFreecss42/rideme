import path from "path";
import PugPlugin from "pug-plugin";
import "webpack-dev-server";

export default {
  devServer: {
    open: true,
    port: 1337,
    hot: true,
    liveReload: true,
    static: {
      directory: path.resolve("dist"),
    },
    watchFiles: {
      paths: ["pug/**/*.pug", "js/**/*.js", "scss/**/*.scss"],
      options: {
        usePolling: true,
      },
    },
  },
  devtool: "inline-source-map",
  entry: {
    index: "./pug/index.pug",
  },
  output: {
    path: path.resolve("dist/"),
    publicPath: "/",
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      css: {
        filename: "css/main.css",
      },
      js: {
        filename: "js/[name].js",
      },
      verbose: true,
    }),
  ],
  mode: "none",
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
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      favicon: path.resolve("./favicon.ico"),
      scss: path.resolve("./scss/"),
      images: path.resolve("./images/"),
      fonts: path.resolve("./fonts/"),
      js: path.resolve("./js/"),
    },
  },
};
