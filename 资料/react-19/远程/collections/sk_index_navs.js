//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    seat:Number,
    codeId:Number,
    img:String,
    url:String,
    type:Number,
    startDate:Date,
    pointColor:String,
    title:String,
    isImg:Number,
    backColor:String,
    backImg:String,
    backStatus:Number,
    fontColor:String
})
module.exports = db.model("indexNavs", mySchema) //dt>hots(collection)


