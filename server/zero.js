#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS zero;
#创建数据库，设置存储的编码
CREATE DATABASE zero CHARSET=UTF8;
#进入数据库
USE zero;
#创建保存数据的表
CREATE TABLE users(
  lid INT primary key AUTO_INCREMENT,
  uname VARCHAR(128),
  phone BIGINT,
  password VARCHAR(56)
);
#插入数据
INSERT INTO users VALUES(1,'小白',17665316052,12345678);