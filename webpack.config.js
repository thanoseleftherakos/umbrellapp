var path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: 'dist/main.min.js',
        sourceMapFilename: 'dist/[file].map',
        publicPath: "http://localhost:8080/"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015','stage-1']
                }
            },
            {
              test: /\.s?css$/,
              loaders: ['style', 'css?sourceMap', 'postcss', 'sass']
            },
             {
              test: /\.woff$/,
              loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            }, {
              test: /\.woff2$/,
              loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            }, {
              test: /\.(eot|ttf|otf|svg|gif|png|jpg)$/,
              loader: "file-loader"
            }
        ]
    },
    postcss() {
        return [
            autoprefixer({ browsers: ['last 3 versions'] }), 
            precss
        ];
    },
    sassLoader: {
        includePaths: [ './assets/sass' ]
    },
    plugins: [
        new ExtractTextPlugin('./styles.css'),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
    ]
};
