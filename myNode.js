//引入express中间件
var express = require('express');
var app = express();

//ip 的插件
const ip = require('ip')
const IP = ip.address();
console.log('内存：')
console.log(process.memoryUsage())

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./dist'));

// 监听端口为3000
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.info('复制打开浏览器', 'http://' + IP + ':' + port)
});
app.use('/jsonp', function(request, response, next) {
    console.log(request);
    response.setHeader('content-type', 'text/plain');
    response.send('jsonpCallback(test)');
    response.end()
});
