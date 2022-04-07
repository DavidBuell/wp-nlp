const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        libraryTarget: 'var',
        library: "$",
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
            },

            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "fast-sass-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin({})
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            title: 'Webpack Natural Language Processing',
            filename: 'index.html',
            inject: 'body',
        }),
        new Dotenv(

        ),
        new MiniCssExtractPlugin(

        )
    ]
}