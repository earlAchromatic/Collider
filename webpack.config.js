const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  watch: true,
  entry: ["./main.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
    library: {
      type: "umd",
      name: "lib",
    },
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  externals: {
    vue: "Vue",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      vue$: path.resolve(
        __dirname,
        "./node_modules/vue/dist/vue.runtime.esm-bundler.js"
      ),
    },
  },
  mode: "production",
};
