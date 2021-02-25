const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
    const plugins = []
    if ( env.production ) plugins.push(new MiniCssExtractPlugin())
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/app.jsx',
        output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js',
        },
        plugins,
        devServer: {
        contentBase: path.join(__dirname, './public'),
        port: 8080,
        historyApiFallback: true
        },

        module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: [
                {
                loader: 'babel-loader'
                }
            ]
            },
            {
            test: /\.s?[ac]ss$/,
            use: [
                env.production ?
                MiniCssExtractPlugin.loader :
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            }
        ]
        },
        resolve: {
        extensions: ['*', '.js', '.jsx']
        },
        devtool: env.production ? 'source-map' : 'eval-source-map'
    }
}