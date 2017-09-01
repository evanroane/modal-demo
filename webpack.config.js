const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre",
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
