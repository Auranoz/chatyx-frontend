/* eslint-disable */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const devServerPort = process.env.CHATYX_DEV_PORT;

const getOptimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
            minSize: 100000,
            maxSize: 350000
        }
    };

    if (isProd) {
        config.minimizer = [new TerserPlugin()];
    }

    return config;
};

module.exports = {
    mode: isDev ? 'development' : isProd && 'production',
    entry: [
        './src'
        // ...(isDev ? [`webpack-dev-server/client?http://localhost:${devServerPort}`] : [])
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: isProd ? '[chunkhash].js' : '[name]_[chunkhash].js'
    },
    optimization: getOptimization(),
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    },
    devServer: {
        open: true,
        port: devServerPort,
        compress: true,
        hot: isDev,
        static: {
            directory: path.join(__dirname, './dist')
        }
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'ChatyX',
            minify: isProd,
            favicon: './src/shared/assets/images/favicon.ico'
        })
    ].concat(
        isDev
            ? [new EslintPlugin({ extensions: ['ts', 'js', 'tsx', 'jsx'] })]
            : []
    ),
    module: {
        rules: [
            {
                test: /\.([tj])sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },

            // Loading images
            {
                test: /.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },

            // Loading fonts
            {
                test: /.(ttf|otf|eot|woff|woff2$)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
