const path = require('path');
const webpack   = require("webpack");

module.exports = [{
    entry   : {
        main: "./src/main.ts",
        // defaultExtension: '.ts', // デフォルト拡張子の指定
    },
    output  : {
        path        : path.join(__dirname, "dist", "js"),
        filename    : "[name].js",
        publicPath  : "/js/",
    },
    devtool: "source-map",
    resolve : {
        modules: [
            path.resolve(__dirname, "src"),
            'node_modules',
        ],
        extensions: [".ts", ".js"],
    },
    module  : {
        rules : [
            {
                test    : /\.ts$/,
                loader  : "awesome-typescript-loader",
                exclude : [
                    /node_modules/,
                ],
            },
        ],
    },
}]
