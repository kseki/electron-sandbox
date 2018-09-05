const path = require('path');

module.exports = {
  // node.js で動作することを指定する
  target: 'node',
  // 起点となるファイル
  entry: './ts/index.tsx',
  // webpack watch したときに差分ビルドをする
  cache: true,
  // development は、 source map file を作成、再ビルド時間の短縮などの設定
  // production は、コードの圧縮やモジュールの最適化が行われる設定となる
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  // ファイルタイプ毎の処理を記述する
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
    }, {
      test: /\.tsx?$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        configFile: './tslint.json',
        typeCheck: true,
      },
    }],
  },
  // 処理対象のファイルを記述する
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
    ]
  },
};
