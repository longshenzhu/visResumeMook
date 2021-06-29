const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //resolve配置Webpack如何寻找模块所对应的文件
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],      //表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。
        alias: {
            '@assets': path.join(__dirname, '../', 'assets/'),
            '@src': path.join(__dirname, '../', 'app/renderer'),   //模块导入别名处理
            '@common': path.join(__dirname, '../', 'app/renderer/common'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            outputPath: 'images/',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
}

