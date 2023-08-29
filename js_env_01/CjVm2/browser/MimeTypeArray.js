cjVm.memory.MimeTypeArray = {};
var MimeTypeArray = function MimeTypeArray() {
    throw new TypeError("illegal constructor");
}; cjVm.safefunction(MimeTypeArray);

//迭代器实现
cjVm.memory.MimeTypeArray.iterator = function values() {
    debugger;
}; cjVm.safefunction(cjVm.memory.MimeTypeArray.iterator);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: cjVm.memory.MimeTypeArray.iterator,
        configurable: true
    }
});
//////////////////////////////////////////////////////////
MimeTypeArray.prototype.item = function item(index) {
    debugger;
    return this[index];
}; cjVm.safefunction(MimeTypeArray.prototype.item);

MimeTypeArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; cjVm.safefunction(MimeTypeArray.prototype.namedItem);
MimeTypeArray.prototype.length = 0;

for (pr in MimeTypeArray.prototype) {
    if (typeof(MimeTypeArray.prototype[pr]) != "function") {
        MimeTypeArray.prototype.__defineGetter__(pr, function(){
            throw new TypeError("illegal constructor");
        })
    }
}

//////////////////////////////////////////////////////////

//依赖注入
navigator.mimeTypes = {}

navigator.mimeTypes.mimeTemp = 0;
for (let pindex = 0; pindex < navigator.plugins.length; pindex++) {
    var _plugin = navigator.plugins.item(pindex);
    for (let mindex = 0; mindex <_plugin.length; index++) {
        var _mimeType = _plugin.item(mindex)
        //重名判断
        if (navigator.mimeTypes[_mimeType.type] == undefined) {
            navigator.mimeTypes[navigator.mimeTypes.mimeTemp] = _mimeType;
        Object.defineProperty(navigator.mimeTypes, _mimeType.type, {
            value: _mimeType
        });
        navigator.mimeTypes.mimeTemp++;
        }
    }
    
}
navigator.mimeTypes.length = navigator.mimeTypes.mimeTemp;
delete navigator.mimeTypes.mimeTemp;

navigator.mimeTypes.__proto__ = MimeTypeArray.prototype;
navigator.mimeTypes = cjVm.proxy(navigator.mimeTypes);