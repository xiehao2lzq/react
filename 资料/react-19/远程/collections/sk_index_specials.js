//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    type:String,
    platform:Object,
    list:Object,
    index:Number,
})
module.exports = db.model("indexSpecials", mySchema) //dt>hots(collection)


