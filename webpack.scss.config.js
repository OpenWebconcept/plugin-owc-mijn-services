const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    editor: './resources/scss/editor.scss',
    'informatieobjecttypen-select': './resources/scss/admin/informatieobjecttypen-select.scss'
  },
  output: {
    path: path.resolve(process.cwd(), 'build/css'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), 'resources/vendor/select2'),
          to: path.resolve(process.cwd(), 'build/select2'),
          info: { minimized: true },
        },
      ],
    }),
  ],
};
