const express = require('express');
const mysql = require('mysql');
//连接数据库
let db = mysql.createConnection(
    {
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'ele'
    }
)
//插件
const bodyParse = require('body-parser');  //为post请求引入的插件
let server =express();
server.listen(8090);

//页面输入http://localhost:8088/a?name=qyq

server.use(bodyParse.urlencoded(
    //扩展语法  降版本
    {
        extended:false
    }
));


// server.post('/reset',(req,res)=>{
//     console.log(req.body);
//     res.send('我收到了你的账号密码')
//     console.log(12313)
    // db.query(`SELECT INTO user (ID,name,pass) VALUES(0,'${req.body.user}','${req.body.pass}')`,(err,data)=>{
    //     if(err){
    //         console.log('error'+err)
    //     }else{
    //         console.log(data);
    //     }
    // });
// })

server.post('/login',(req,res)=>{
    console.log(req.body);
    console.log(req.body.user,req.body.pass)
    // 操作数据库
    //执行sql语句
    if(req.body.type=='login'){
    db.query(`INSERT INTO user (ID,name,pass) VALUES(0,'${req.body.user}','${req.body.pass}')`,(err,data)=>{
        if(err){
            console.log('error'+err)
        }else{

            console.log("创建用户成功");
        }
    });
}else if(req.body.type=='reset'){
    console.log('235653')
    db.query(`UPDATE user SET pass = '${req.body.pass}' WHERE name = '${req.body.user}'`,(err,data)=>{
        if(err){
            console.log('error'+err)
        }else{
            
            console.log('修改成功');
        }
    });
}
})

