const db = require("mongoose");
db.connect('mongodb://47.96.0.211:27017/sk');
module.exports = db;