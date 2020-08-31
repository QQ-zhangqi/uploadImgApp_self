//1、引入express
const express = require('express')
const path = require("path");
const multer = require("multer");
//2、创建服务器app
const app = express()

// 解决跨域
const cors = require("cors");
app.use(cors());

// 静态托管，记得前面要拼接upload，因为前端预览图片要完整的路径要有upload
app.use("/upload",express.static("./upload"))

// multer包创建实例，指定上传的文件路径存放的路径
const upload = multer({dest:path.join(__dirname,"/upload")})
// 4、发送请求，局部中间件指定客户端已img字段作为上传的字段
app.post("/upload",upload.single("img"),(req,res)=>
{
    if(!req.file&&req.file.fieldname=="img")
    {
        return res.send("请上传文件");
    }

    res.send({
        status:0,
        msg:"上传成功",
        imgUrl:req.file.filename
    })

})
app.use((err,req,res,next)=>
{
    if(err)
    {
        res.send(err.message)
    }
})

//3、启动服务器
app.listen(80,()=>{console.log('server running at http://127.0.0.1:80')})