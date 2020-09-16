const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {
  const isSourceMap = args.mode === 'development'

  return {
    entry : './src/index.tsx',
    output : {
      path       : path.join(__dirname, 'public'),
      filename   : 'index.js',
      publicPath : '/'
    },
    module : {
      rules : [
        {
          enforce : 'pre',
          test    : /\.tsx?$/,
          exclude : /node_modules/,
          loader  : 'eslint-loader'
        },
        {
          test   : /\.tsx?$/,
          loader : 'ts-loader'
        },
        {
          test : /\.css$/,
          use  : [
            'style-loader',
            {
              loader  : 'css-loader',
              options : {
                url           : false,
                sourceMap     : isSourceMap,
                importLoaders : 2
              }
            },
          ]
        },
        {
          test : /\.scss$/,
          use  : [
            'style-loader',
            {
              loader  : 'css-loader',
              options : {
                url           : true,
                sourceMap     : isSourceMap,
                importLoaders : 2
              }
            },
            {
              loader  : 'postcss-loader',
              options : {
                sourceMap : isSourceMap,
                plugins   : [
                  require('autoprefixer')({ grid: true})
                ]
              }
            },
            {
              loader  : 'sass-loader',
              options : {
                sourceMap : isSourceMap
              }
            }
          ]
        },
        {
          loader: 'url-loader',
          test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/
        },
        {
          test: require.resolve('snapsvg'),
          use: [
            {
              loader: 'imports-loader',
              options: {
                this: '>window',
                fix: '>module.exports=0'
              }
            }
          ]
        }
      ]
    },
    resolve : {
      extensions : ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer : {
      contentBase        : path.join(__dirname, 'public'),
      port               : 8080,
      open               : 'chrome',
      historyApiFallback : true,
    },
    plugins : [
      // new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template : `${__dirname}/src/index.html`,
        favicon  : `${__dirname}/src/assets/favicon.ico`
      })
    ]
  }
}
