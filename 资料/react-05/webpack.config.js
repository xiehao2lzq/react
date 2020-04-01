const baseConfig = require("./config/base");
const prodConfig = require("./config/prod");
const devConfig = require("./config/dev");
// module.exports = {
//     ...baseConfig,
//     ...prodConfig
// }

module.exports = function(param){
    // console.log(env)
    let config = null;
    if(param === "prod"){ //如果是生产环境  output:{filename:"[name]_[hash].js"}
        config = {...baseConfig,...prodConfig.config};
        config.output.filename = prodConfig.filename;
        console.log(config)
    }else{  //开发环境
        config = {...baseConfig,...devConfig};
    }
    return config
}