// var webpack = require("webpack");

module.exports = {
    entry: "./app/assets/scripts/app.js",//над которым работает w
    output: {
        path: __dirname + "/app/temp/scripts",//куда выгружает скомпилированый
        filename: "App.js"//имя скомпилированого файла
    },
    module: {//настройка бебель компиляции es6 в es5
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                }
            }
        ]
    }
};
