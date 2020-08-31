//1、引入express
const express = require('express')
const path = require("path");
const multer = require("multer");
//2、创建服务器app
const app = express()
// 4、发送请求
app.post("/upload",(req,res)=>
{

})

//3、启动服务器
app.listen(80,()=>{console.log('server running at http://127.0.0.1:80')})