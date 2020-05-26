const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        publicPath: '/',
        stats: 'errors-only',
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3001'
        }
    }
};
