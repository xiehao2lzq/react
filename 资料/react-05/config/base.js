let config = {
    //entry:["./src/main","./src/vendor"],//入口文件
    entry:{  //实现了多入口  多出口的配置
        main:"./src/main",
        vendor:"./src/vendor"
    },
    output:{
        path:__dirname+"/../dist",  //打包之后文件路径
        filename:"[name].js" //打包后的文件名称  main.js  vendor.js
    }
}

module.exports = config;