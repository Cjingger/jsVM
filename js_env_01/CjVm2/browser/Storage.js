var Storage = function Storage() {
    //Navigator不能被new
    throw new TypeError("illegal constructor");
}; //构造函数
cjVm.safefunction(Storage);

Object.defineProperties(Storage, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
});

Storage.prototype.length=0
Storage.prototype.clear=function clear() {
    debugger;
    var temp = Object.keys(this);
    for (let i = 0; i < temp.length; i++) {
        delete this[temp[i]];
    }
 }; cjVm.safefunction(Storage.prototype.clear);
Storage.prototype.getItem=function getItem(key) { 
    debugger;
    return this[key];
}; cjVm.safefunction(Storage.prototype.getItem);
Storage.prototype.key=function key(index) { 
    return Object.keys(this)[index];
 }; cjVm.safefunction(Storage.prototype.key);
Storage.prototype.removeItem=function removeItem() { 
    debugger;
    delete this[k];
 }; cjVm.safefunction(Storage.prototype.removeItem);
Storage.prototype.setItem=function setItem(key, val) {
    debugger;
    this[key] = val;
}; cjVm.safefunction(Storage.prototype.setItem);

//////////////////////
// 容易被检测
Storage.prototype.__defineGetter__("length", function length() {
    return Object.keys(this).length;
})

//////////////////////

var localStorage = {};
localStorage.__proto__ = Storage.prototype;
localStorage = cjVm.proxy(localStorage);

var sessionStorage = {};
sessionStorage.__proto__ = sessionStorage.prototype;
sessionStorage = cjVm.proxy(sessionStorage);


