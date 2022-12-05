const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: false,
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: ['url-loader', 'file-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
        ]
    }
}