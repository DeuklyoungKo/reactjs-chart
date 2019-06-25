const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',

    /* 이 부분은 entry와 output의 기본값으로 생략 가능합니다. */
    entry: {
        index: './src/index.js',
        // charts: './src/ChartjsIndex.js'
    },

    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: '[name].[hash].bundle.js'
    },

    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyPlugin([
            { from: './src/data', to: 'data' },
        ]),

        new CleanWebpackPlugin()
    ]
};