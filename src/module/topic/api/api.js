import Mock from 'mockjs'
const Random = Mock.Random;
export const fetchItems = (type)=>{
    return new Promise(function(resolve,reject){
        const data = getData();
        resolve(data);
    });
}

/**
 * 随机获取topics
 */
function getData(){
    console.log('我是一个新的请求')
    const data = Mock.mock({
        'topic|20':[{
            'id|+1':1,
            'title':Random.word(25,35),
            'tags|3':[Random.word(3,5)]
        }]
    })
    return data.topic;
}
