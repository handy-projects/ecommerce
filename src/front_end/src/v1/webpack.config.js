var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.jsx"
    ],
    devtool: "source-map", // will add webpack:// into Chrome dev-cli
    output: {
        path: __dirname + '/build',
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true}), // will minify all js
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]

};
