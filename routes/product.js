const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//往路由器中添加路由
//1用户列表
router.get('/list',function(req,res){
	//1.1获取数据
	var obj=req.query;
	//console.log(obj);
	//1.2判断页码是否为空，默认值为1；
	//如果大小为空，默认值是10
	var pno=obj.pno;
	var size=obj.size;
	if(!pno)	pno=1;	
	if(!size)   size=10;
	//console.log(pno,size);
	//1.3转为整型
	pno=parseInt(pno);
	size=parseInt(size);
	//1.4计算开始查询的值
	var start=(pno-1)*size;
	//1.5执行sql语句
	pool.query('SELECT lid,price,title FROM xz_laptop LIMIT ?,?',
	[start,size],function(err,result){
	   if (err) throw err;
	   res.send(result);   
	});
});
//2商品详情
//3商品添加
//4商品删除
//5商品修改
module.exports=router;