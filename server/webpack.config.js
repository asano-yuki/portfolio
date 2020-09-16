const path = require('path')

module.exports = (env, args) => {
  const isSourceMap = args.mode === 'development'

  return {
    target : 'node',
    node   : {
      // ビルド後の位置を参照したいのでfalseにする
      __dirname : false
    },
    entry : {
      'index' : path.join(__dirname, 'src', 'index.ts')
    },
    output : {
      path       : path.join(__dirname, 'public'),
      filename   : '[name].js',
      publicPath : '/public'
    },
    devtool : isSourceMap ? 'eval-source-map' : '',
    module : {
      rules : [
        {
          enforce : 'pre',
          test    : /\.(ts)|(js)$/,
          exclude : /node_modules/,
          loader  : 'eslint-loader'
        },
        {
          test   : /\.ts$/,
          loader : 'ts-loader'
        }
      ]
    }
  }
}
