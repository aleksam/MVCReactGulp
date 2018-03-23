// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'reactsrc/dist'),
    JS: path.resolve(__dirname, 'reactsrc'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'main.js'),
    output: {
        path: paths.DIST,
        filename: 'react-components.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new UglifyJsPlugin()
    ],
};