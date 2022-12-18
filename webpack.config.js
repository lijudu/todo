// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: false,
    // plugins: [new HtmlWebpackPlugin({
    //     filename: './index.html'
    // })],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: ['url-loader', 'file-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}