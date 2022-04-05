const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            title: 'Webpack Natural Language Processing',
            filename: 'index.html',
            inject: 'body',
        }),
    ]
}