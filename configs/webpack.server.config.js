var path = require("path")
var nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: path.resolve(__dirname, "..", "src", "server.js"),
    output: {
        path: path.resolve(__dirname, "..", "public", "dist", "server"),        
        publicPath: "/dist/server",
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react", "stage-2"]
                }
            }
        ]
    },
    externals: [nodeExternals()],
    target: "node",
    node: {
        __dirname: true
    }
}