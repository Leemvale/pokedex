const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        main: path.resolve(__dirname, "./client/src/index.jsx")
    },
    output: {
        path: path.resolve(__dirname, "./client/dist"),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "style.css"}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"client", "src", "index.html"),
            filename: "index.html"
        })
    ],
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:8080'
        }],
        historyApiFallback: true
    }
};