async function example(params){
    //
}
function example(params){
    return spawn(function*(){
        //
    });
}
function spawn(genF){
    return new Promise(function(resolve,reject){
        const gen = genF();//生成器对象
        function step(nextF){
            let next;
            try {
                next = nextF();//执行gen.next
            } catch (error) {
                return reject(e);
            }
            if(next.done){
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function(v){
                step(function(){
                    return gen.next(v);
                })
            },function(e){
                step(function(){
                    return gen.throw(e);
                })
            });
        }
        step(function(){
            return gen.next(undefined);
        })
    });
}