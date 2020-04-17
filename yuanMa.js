function initMixin (Vue) {
  Vue.prototype._init = function (options) {  
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );  
  } 
}

function resolveConstructorOptions (Ctor) {
  options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);      
}


//组件：parent：父组件对象  child:组件  vm实例
function mergeOptions (
  parent,
  child,
  vm
) {  
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  //key指的是components  directives  filters var ASSET_TYPES = ['component','directive', 'filter'];
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    //父组件和子组件都有的字段，只做一次策略处理    
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  //自定义策略
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

//自定义策略处理
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};


function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
 
    return function mergedInstanceDataFn () {    
    }
  }


  //自定义策略函数：比如count 策略函数
  Vue.config.optionMergeStrategies.count = function(parent,child,vm){
    return child>=10?child:10;
  }


  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);
  }
