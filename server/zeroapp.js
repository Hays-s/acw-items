// 加载Express模块
const express = require('express');
// 加载CORS模块
const cors = require('cors');
// 加载body-parser模块(在Express4.5及以上的版本,自带body-parser中间件)
const bodyParser = require('body-parser');
// 加载MD5模块
const md5 = require('md5');
// 加载MySQL模块
const mysql = require('mysql');
// 创建WEB服务器
const server = express();

// 为所有的HTTP请求使用CORS模块
server.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080']
}));

// 为所有的HTTP请求使用body-parser模块

server.use(bodyParser.urlencoded({
  extended: false
}));

//创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: '127.0.0.1',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password: '',
  // 数据库名称
  database: 'acw',
  // 最大连接数
  connectionLimit: 15
});


//用户注册接口
server.post('/register', (req, res) => {

  //console.log(md5('12345678'));

  //获取用户名和密码信息
  let uname = req.body.uname;
  let phone = req.body.phone;
  let password = req.body.password;
  // 先需要以username为条件进行用户的查找操作
  let sql = 'SELECT COUNT(id) AS count FROM acw_user WHERE phone=?';
  // 执行SQL查询
  pool.query(sql, [phone], (error, results) => {        
    if (error) throw error;
    if (results[0].count) {
      res.send({ code: 201, message: "用户注册失败" });
    } else {
      // 插入记录的SQL语句
      sql = 'INSERT INTO acw_user(uname,phone,password) VALUES(?,?,?)';
      // 执行SQL语句
      pool.query(sql, [uname, phone,password], (error, results) => {
        if (error) throw error;
        res.send({ code: 200, message: "用户注册成功" })
      })
    }
  });

});

// 用户密码登录的接口
server.post('/login1',(req,res)=>{
  // 获取用户名和密码信息
  let phone = req.body.phone;
  let password = req.body.password;
  // SQL查询语句
  let sql = 'SELECT id,uname,avatar FROM acw_user WHERE phone=? AND password=?';
  // 执行SQL查询
  pool.query(sql,[phone,password],(error,results)=>{
    console.log(results.length)
    if(error) throw error;
    if(results.length){
      res.send({code:200,message:"登录成功",info:results[0]});
    } else {
      res.send({code:201,message:"登录失败"});
    }
  });
});

// 用户验证码登录的接口
server.post('/login2',(req,res)=>{
  // 获取用户名
  let phone = req.body.phone;
  // SQL查询语句
  let sql = 'SELECT id,uname,avatar FROM acw_user WHERE phone=?';
  // 执行SQL查询
  pool.query(sql,[phone],(error,results)=>{
    console.log(results.length)
    if(error) throw error;
    if(results.length){
      res.send({code:200,message:"登录成功",info:results[0]});
    } else {
      res.send({code:201,message:"登录失败"});
    }
  });
});

// 获取用户信息的接口 -- Vuex的测试数据
server.get('/user',(req,res)=>{

  res.send({name:"WEBTN2008",sex:false});
  
});

// 指定 WEB服务器监听的端口
server.listen(3000);
