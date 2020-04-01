const sk_index_navs = require("./collections/sk_index_navs");
const sk_index_specials = require("./collections/sk_index_specials");

//1.引入首页相关数据
// let indexNavsData = require("./data/sk_index_navs");
// let indexSpecialsData = require("./data/sk_index_specials");

//2.插入语句
// sk_index_navs.insertMany(indexNavsData,err=>{
//     if(!err){
//         console.log("sk_index_navs插入成功！")
//     }
// })
// sk_index_specials.insertMany(indexSpecialsData, err => {
//     if (!err) {
//         console.log("sk_index_specials插入成功！")
//     }
// })



var express = require('express')
var app = express();
app.listen(8088,"0.0.0.0")
var router = express.Router()
app.use("/sk",router)
//localhost:8088/sk/navs
router.get("/navs",(req,res,next)=>{
    navsModel = sk_index_navs.find({})
    navsModel.exec((err,doc)=>{
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})


// 查询/sk/home/list?page=2&limit=4&sort=1
//page页数  limit条数
router.get("/home/list", (req, res, next) => {
    // 接受前端传来的参数
    let page = parseInt(req.param('page')) || 1 
    let pageSize = parseInt(req.param('limit')) || 10
    let sort = req.param("sort")
    let skip = (page-1) * pageSize//1*10
    let params = {};
    let hotsModel = sk_index_specials.find(params).skip(skip).limit(pageSize)
    let len = 0;
    sk_index_specials.find(params,(err,result)=>{
        len = result.length;
        hotsModel.sort({ 'favorite_count': sort })
        hotsModel.exec((err, doc) => {
            if (err) {
                res.json({
                    status: '-1',
                    msg: err.message
                })
            } else {
                res.json({
                    status: '1',
                    data: {
                        total: len,
                        current_total: doc.length,
                        object_list: doc
                    }
                })
            }
        })
    })
})





//更新语句
// dt.updateOne({ sender_id: 16617347 }, { $set: { msg:"哈哈哈"}},err=>{
//     if(!err){
//         console.log("更新成功！")
//     }
// })

// dt.updateMany({ name: "王五" }, { $set: { age: 30 } }, err => {
//     if (!err) {
//         console.log("更新成功！")
//     }
// })


//删除语句
// dt.deleteMany({name:"Lisi"},err=>{
//     if(!err){
//         console.log("删除成功！")
//     }
// })


//查找用户
// dt.find({ name: "王五" }, { name: 1, age: 1, _id: 0 }, (err, result) => {
//     if (!err) {
//         var str = ""
//         result.forEach(item => {
//             str += item.name + ":" + item.age + "\n"
//         })
//         console.log("用户信息为：\n" + str)
//     }
// });