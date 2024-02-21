const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {ProvidePlugin} = require("webpack");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js"),
        gremlins: "gremlins.js"
    },
    output: {
        filename: "[name].[hash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "testing",
            filename: "public/index.html",
            template: path.resolve(__dirname, "public", "index.html"),
            chunks: ["index"]
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, "public"),
        //             to: path.resolve(__dirname, "dist", "public"),
        //             globOptions: {
        //                 ignore: [path.resolve(__dirname, "public", "index.html")]
        //             }
        //         }
        //     ]
        // }),
        new ProvidePlugin({
            gremlins: "gremlins.js"
        }),
        new CleanWebpackPlugin(),
    ]
}