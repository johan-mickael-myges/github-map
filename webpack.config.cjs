const path = require('path');

module.exports = {
    entry: './main.ts', // Entry point of your TypeScript code
    output: {
        filename: 'main.js', // Output bundle file name
        path: path.resolve(__dirname, '.'), // Output directory
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Match TypeScript files
                use: 'ts-loader', // Use ts-loader for transpiling TypeScript
                exclude: /node_modules/, // Exclude node_modules
            },
        ],
    },
};