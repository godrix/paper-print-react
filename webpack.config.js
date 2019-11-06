var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/PaperReact.js',
    output: {
        path: path.resolve('lib'),
        filename: 'PaperReact.js.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
