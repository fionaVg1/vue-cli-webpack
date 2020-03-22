function createObject(o){
    function fun(){}   
    fun.prototype = o;
    return new fun();
}
function inherit(subClass,parentClass){
    var parent = createObject(parentClass.prototype);
    parent.constructor = subClass;
    subClass.prototype = parent;
}
function Parent(name){
    this.name = name;    
}
Parent.prototype.getName = function(){
    return this.name;
}
function son(name){
    Parent.call(this,name);
}
inherit(son,Parent);
var son1 = new son('test');
