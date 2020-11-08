const paths = require('./paths');

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: [paths.src + '/index.js'],
    },
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },

    // customize the build process
    plugins: [
        // remove/clean build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // copy files from src to dest
        new CopyWebpackPlugin({
            patterns: [{
                from: paths.public,
                to: 'assets',
                globOptions: {
                    ignore: ['*.DS_Store'],
                }
            }]
        }),

        // generate HTML from template
        new HtmlWebpackPlugin({
            title: 'Webpack Stater',
            favicon: paths.src + '/assets/images/favicon.png',
            template: paths.src + '/index.html',
            filename: 'index.html'
        })
    ],

    // determine how modules in project are related
    module: {
        rules: [
            // js: uses babel for transpilation
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // styles: inject css into head with source maps
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },

            // images: copy to build folder
            {
                test: /\.(?:ico|gif|png|jpe?g)$/i,
                type: 'asset/resource'
            },
            // fonts and SVGs: inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    }
}