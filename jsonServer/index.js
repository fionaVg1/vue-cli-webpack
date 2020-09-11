const Mock = require('mockjs');
module.exports = ()=>{
    const data = Mock.mock({
        'user|1000':[{
            'id|+1':1,
            'name':'@first @last'
        }]
    })
    return data;
}