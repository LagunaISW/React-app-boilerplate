const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('./config/dev_environment');

module.exports = {
  entry: {
    public: [
      './src/common/heapLoader.dev.js',
      'babel-polyfill',
      'whatwg-fetch',
      'react-hot-loader/patch',
      './src/public/index.js'
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/bundle.js'
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './build',
    host: '0.0.0.0',
    port: 2017,
    compress: true,
    hot: true,
    stats: 'minimal',
    proxy: [{
      context: ['/auth', '/v1', '/web', '/test'],
      target: process.env.DOCKER ? 'http://server:2018' : 'http://localhost:2018',
      secure: false,
      historyFallback: {
        index: 'public/index.html'
      }
    }]
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
            'react-hot-loader/babel',
            'transform-class-properties'
          ],
          cacheDirectory: true
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer()]
          }
        }
      ],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
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
      { from: './src/static', to: '.' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'CONEKTA_PUBLIC_KEY': JSON.stringify(process.env.CONEKTA_PUBLIC_KEY)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      chunks: ['public', 'commons'],
      filename: 'index.html',
      title: 'React App development',
      appMountId: 'root',
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Open+Sans:400,600',
        'https://fonts.googleapis.com/css?family=Raleway:400,600',
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css',
        'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      ]
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      CommonComponents: path.resolve(__dirname, './src/common/Components/index.js')
    }
  }
};
