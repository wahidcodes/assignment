const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      require('tailwindcss'),
                      require('autoprefixer'),
                    ],
                  },
                },
              },
            ],
          },
          {
            test: /\.js$/,
          },
          {
            test: /\.html$/,
            use: ['html-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    
}