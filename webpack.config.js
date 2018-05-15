const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

require('./config/prod_environment');

module.exports = {
  entry: {
    public: [
      './src/common/heapLoader.js',
      'babel-polyfill',
      'whatwg-fetch',
      './src/public/index.js'
    ],
    dashboard: [
      './src/common/heapLoader.js',
      'babel-polyfill',
      'whatwg-fetch',
      './src/dashboard/index.js'
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties'
          ],
          cacheDirectory: true
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          'postcss-loader'
        ]
      }),
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }),
      include: /node_modules/
    }, {
      test: /\.txt$/,
      use: 'raw-loader'
    }] // end rules
  }, // end module
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons/commons.js'
    }),
    new CopyWebpackPlugin([
      { from: './src/public/index.html', to: './public/index.html' },
      { from: './src/dashboard/index.html', to: './dashboard/index.html' },
      { from: './src/static', to: '.' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'CONEKTA_PUBLIC_KEY': JSON.stringify(process.env.CONEKTA_PUBLIC_KEY)
      }
    }),
    new ExtractTextPlugin('[name]/styles.css'),
    new CleanWebpackPlugin(['build'])
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      CommonComponents: path.resolve(__dirname, './src/common/Components/index.js')
    }
  }
};
