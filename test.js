let treeData = {
    id:1,
    children:[
        {
            id:11,
            children:[
                {
                    id:111
                },
                {
                    id:112
                }
            ]
        },
        {
            id:12,
            children:[
                {
                    id:121,
                    children:[
                        {
                            id:1211
                        }
                    ]
                },
                {
                    id:122,
                    children:[
                        {
                            id:1221,
                            children:[
                                {
                                    id:12211
                                }
                            ]
                        },
                        {
                            id:1222,
                        }
                    ]
                }
            ]
        }
    ]
};
/**
 * 写一个方法，可以根据传入的节点id找到对应的到达该节点的路径，并且找到其所有的没有子节点的叶子节点
 * 比如传入的参数是id=122,则path='1-12-122',leaves为'12211-1222'
 */
findPathAndLeaves(treeData,122);
function findPathAndLeaves(treeData,id){
    let pResult = [],cResult=[];
    findTarget(treeData,id);
    findAllParents(treeData,id,pResult);
    findChildren(target,cResult);
    console.log('path---:',pResult.join('-'));
    console.log('leaves---:',cResult.join('-'));
}

function findAllParents(treeData,id,pResult){    
    findParent(treeData,id);
    if(pResult.indexOf(parentId)<0 && parentId){
        pResult.push(parentId);
        let _parentId = parentId;
        parentId = '';
        findAllParents(treeData,_parentId,pResult);
    }
}

var target='';
var parentId;
function findTarget(treeData,id){
    if(target){
        return target;
    }
    if(!treeData){
        return;
    }
    if(treeData.id === id){
        return treeData;
    }
    if(treeData.children && treeData.children.length>0){
        for(let item of treeData.children){
            if(item.id === id){
                target = item;          
                break;
            }else{
                findTarget(item,id);
            }
        }
    }  
}

function findParent(treeData,id){
    if(parentId){
        return parentId;
    }
    if(!treeData){
        return;
    }
    if(treeData.id === id){
        return treeData;
    }
    if(treeData.children && treeData.children.length>0){
        for(let item of treeData.children){
            if(item.id === id){
                parentId = treeData.id;        
                break;
            }else{
                findParent(item,id);
            }
        }
    } 
}

function findChildren(target,cResult){
    if(!target || !target.children){
        return;
    }
    for(let item of target.children){
        if(!item.children){
            cResult.push(item.id);
        }else{
            findChildren(item,cResult);
        }
    }
}

