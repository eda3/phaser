const path = require('path');
const webpack   = require("webpack");

module.exports = [{
    entry   : {
        main: "./src/main.ts",
    },
    output  : {
        path        : path.join(__dirname, "dist", "js"),
        filename    : "[name].js",
        publicPath  : "/js/",
    },
    devtool: "source-map",
    module  : {
        loaders : [
            {
                test    : /\.ts$/,
                loader  : "awesome-typescript-loader",
                exclude : [
                    /node_modules/,
                ],
            },
        ],
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },
}]
