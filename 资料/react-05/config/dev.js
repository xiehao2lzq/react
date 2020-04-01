let HtmlWebpackPlugin  = require("html-webpack-plugin");
const config = {
    mode:"development",
    plugins:[
       new HtmlWebpackPlugin({//使用插件直接通过new一下即可使用

       })
    ]
}
module.exports = config;