const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV !== "production";
const isAnalyze = process.env.npm_lifecycle_event === "analyze";

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash:8].js",
    assetModuleFilename: "assets/[name].[contenthash:8][ext]",
    clean: true,
  },

  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },

      {
        test: /\.scss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.less$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[contenthash:8][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new ESLintPlugin({
      extensions: ["js", "ts"],
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/img"),
          to: "assets/img",
        },
      ],
    }),

    ...(isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
          }),
        ]),

    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],

  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["mozjpeg", { quality: 75 }],
              ["pngquant", { quality: [0.65, 0.9] }],
              [
                "svgo",
                {
                  plugins: [
                    { name: "preset-default" },
                    { name: "removeViewBox", active: false },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all", // vendor splitting
    },
  },

  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
