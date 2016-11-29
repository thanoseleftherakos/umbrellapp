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
        path: path.join(__dirname, '/dist/'),
        filename: 'src/assets/js/[name]-[hash].min.js',
        publicPath: '/'
    },
    module: {
        loaders: [
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
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
             {
              test: /\.woff$/,
              loader: "url-loader?limit=100000&mimetype=application/font-woff&name=[path][name].[ext]"
            }, {
              test: /\.woff2$/,
              loader: "url-loader?limit=100000&mimetype=application/font-woff2&name=[path][name].[ext]"
            }, {
              test: /\.(eot|ttf|otf|svg|gif|png|jpg)$/,
              loader: "url-loader?limit=10000&name=[path][name].[ext]"
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
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('src/assets/css/[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
