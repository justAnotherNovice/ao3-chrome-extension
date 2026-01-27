const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        popup: "./src/index.tsx",
        "content-script": "./src/content-scripts/content-script.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }],
                exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "manifest.json" },
                { from: "popup.html", to: "popup.html" },
                { from: "./src/assets/styles/popup.css", to: "popup.css" },
            ],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
    },
};