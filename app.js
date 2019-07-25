const express=require('express');
//引入bodyParser中间件
const bodyParser=require('body-parser');
const productRouter=require('./routes/product.js');
//const productRouter=require('./routes/product.js');
var app=express();
app.listen(8080);
//使用body-parser中间件    路由和中间件无关
app.use(bodyParser.urlencoded({
  extended:false
}));
//托管静态资源到public目录
app.use( express.static('./public') );
//使用路由器，挂载到/user下
app.use('/product',productRouter);//先使用中间件，再路由
//app.use('/user',productRouter);