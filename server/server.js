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
//执行sql语句
db.query(`INSERT INTO user (ID,name,pass) VALUES(0,'名流','12')`,(err,data)=>{
    if(err){
        console.log('error'+err)
    }else{
        console.log(data);
    }
});