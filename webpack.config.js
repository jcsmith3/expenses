const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname,'./public'),
        filename: 'bundle.js'
    },

    devServer:{
        contentBase: path.join(__dirname,'./public'),
        port: 8080,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname,'src'),
            use: [
                {
                loader: 'babel-loader',
            }
            ]
        },
        {
            test: /\.s?[ac]ss$/,
            use: [
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
        devtool: 'eval-source-map'
}