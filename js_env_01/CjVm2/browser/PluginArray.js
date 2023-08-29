cjVm.memory.PluginArray = {};
var PluginArray = function PluginArray() {
    throw new TypeError("illegal constructor");
}; cjVm.safefunction(PluginArray);

//迭代器实现
cjVm.memory.PluginArray.iterator = function values() {
    debugger;
}; cjVm.safefunction(cjVm.memory.PluginArray.iterator);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: cjVm.memory.PluginArray.iterator,
        configurable: true
    }
});
//////////////////////////////////////////////////////////

PluginArray.prototype.item = function item(index) {
    debugger;
    return this[index];
}; cjVm.safefunction(PluginArray.prototype.item);

PluginArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; cjVm.safefunction(PluginArray.prototype.namedItem);

PluginArray.prototype.refresh = function refresh() {
    debugger;
}; cjVm.safefunction(PluginArray.prototype.refresh);

PluginArray.prototype.length = 0;

for (pr in PluginArray.prototype) {
    if (typeof(PluginArray.prototype[pr]) != "function") {
        PluginArray.prototype.__defineGetter__(pr, function(){
            throw new TypeError("illegal constructor");
        })
    }
}
//////////////////////////////////////////////////////////


cjVm.memory.PluginArray._pluginArray = {};
if (cjVm.memory.PluginArray.tempArray != undefined) {
    for (let index = 0; index < cjVm.memory.PluginArray.tempArray.length; index++) {
        var pluginTemp = cjVm.memory.PluginArray.new(cjVm.memory.PluginArray.tempArray[index]);
        cjVm.memory.PluginArray._pluginArray[index] = pluginTemp;
        Object.defineProperty(cjVm.memory.PluginArray._pluginArray, cjVm.memory.PluginArray.tempArray[index].name, {
            value: cjVm.memory.PluginArray.tempArray[index]
        });
    }
    cjVm.memory.PluginArray._pluginArray.length = cjVm.memory.PluginArray.tempArray.length;

}

cjVm.memory.PluginArray._pluginArray.__proto__ = PluginArray.prototype;
cjVm.memory.PluginArray._pluginArray = cjVm.proxy(cjVm.memory.PluginArray._pluginArray);

//依赖注入
navigator.plugins = cjVm.memory.PluginArray._pluginArray;