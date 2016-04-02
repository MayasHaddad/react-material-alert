import webpack from 'webpack'
import yargs from 'yargs'

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv
const nodeEnv = optimizeMinimize ? 'production' : 'development'

export default {
  output: {
    path: 'lib/',
    publicPath: 'lib/',
    filename: 'app.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    './lib/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  module: {
    preLoaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel?' + JSON.stringify({presets: ['react', 'es2016']}),
      include: require('path').join(__dirname, './src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }],
    plugins: [
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) }
      })
    ],
    devtool: optimizeMinimize ? 'source-map' : null
  }
}
