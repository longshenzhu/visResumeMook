const path = require("path");
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("__dirname:", __dirname);   // D:\MyWorkSpace\LixiaobingDeKe\workspace\react\visResumeMook\webpack

const devConfig = {
    mode: 'development',
    entry: {
        //对应渲染进程的app.jsx 入口文件
        index: path.resolve(__dirname, '../app/renderer/app.tsx'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: '127.0.0.1',
        port: 7001,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 👇 以此文件为模版，自动生成 HTML
            template: path.resolve(__dirname, '../app/renderer/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html'),
            chunks: ['index'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            }
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                ]
            }
        ]
    }
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
