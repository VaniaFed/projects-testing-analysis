const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                exclude: /\.module\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.module.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.png|jpg|jpeg|svg|gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development'
};
