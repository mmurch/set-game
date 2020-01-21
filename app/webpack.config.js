var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    mode: "development",
    entry: {
        home: "./static/src/js/home.js",
        'html/home': './templates/home.j2',
    },
    output: {
        path: __dirname + '/static/dist',
        filename: "[name].js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname,
        publicPath: '/static/dist/',
        watchContentBase: true,
        port: 9001,
        proxy: {
            '!(/static/dist/**/**.*)': {
                target: 'http://127.0.0.1:5000',
                secure: false,
                changeOrigin: true,
                headers: {
                    Connection: 'keep-alive'
                }
            },
        },
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "eslint-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/react"
                        ]
                    }
                }
            },
            {
                test: /\.(html|j2)$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['rm -rf static/dist/html && echo "deleted the dist/html folder"'],
        }),
    ]
}