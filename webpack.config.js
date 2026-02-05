const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        popup: "./src/index.tsx",
        "content-script": "./src/content-scripts/content-script.ts"
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
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "extension/*",
                    to: "[name][ext]"
                },
                {
                    from: "extension/styles/*",
                    to: "assets/styles/[name][ext]"
                },
                {
                    from: "extension/images/*",
                    to: "assets/images/[name][ext]"
                },
            ],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/[name].js",
    },
};