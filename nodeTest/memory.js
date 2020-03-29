function getMemory(){
    var memory = process.memoryUsage();
    function format(bytes){
        return (bytes/1024/1024).toFixed(2)+'MB'
    }
    console.log('headTotal: '+format(memory.heapTotal)+'       headpUsed:  '+format(memory.heapUsed)
    );
}

var a = [];
var size = 20*1024*1024;
function b(){
    var arr1 = new Array(size);
    var arr1 = new Array(size);
    var arr1 = new Array(size);
    var arr1 = new Array(size);
    var arr1 = new Array(size);
}
b();
getMemory();
setInterval(() => {
   a = [];
   a.push(new Array(size));
   a = undefined;
   getMemory();
}, 1000);

var b = [];
for(var i=0;i<15;i++){
    if(b.length>4){
        b.shift();
    }
    b.push(new Array(20*1024*1024));
}

var a = {n:1};
var b = a;
a.x = a = {n:2}

内存：#1000   {n:1}
a: #1000
b: #1000
由于.的优先级高于等于好，所以#1000 变为{n:1,x:}
#2000  {n:2}  a指向#2000,再将x指向{n:2}

所以a: {n:2}   b:{n:1,x:{n:2}}