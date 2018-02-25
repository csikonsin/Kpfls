var path = require("path")
var webpack = require("webpack")

var opts = {
    ADMIN: true
}

module.exports = {
    entry: path.resolve(__dirname, "..", "src", "client-entry.js"),
    output: {
        path: path.resolve(__dirname, "..", "public", "dist", "client"),
        filename: "bundle-admin.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "react", "stage-2"]
                        }
                    },
                    {
                        loader: "ifdef-loader",
                        options: opts
                    }
                ]
                
            }
        ]
    },
    target: "web"
}