function getMemory() {
    var memory = process.memoryUsage();

    function format(bytes) {
        return (bytes / 1024 / 1024).toFixed(2) + 'MB'
    }
    console.log('headTotal: ' + format(memory.heapTotal) + '       headpUsed:  ' + format(memory.heapUsed));
}

var a = [];
var size = 20 * 1024 * 1024;

function b() {
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
for (var i = 0; i < 15; i++) {
    if (b.length > 4) {
        b.shift();
    }
    b.push(new Array(20 * 1024 * 1024));
}

var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };