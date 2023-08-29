var History = function History() {
    //History不能被new
    throw new TypeError("illegal constructor");
}; //构造函数
cjVm.safefunction(History);

Object.defineProperties(History, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
})
////////////////////////////////////////////
History.prototype.back = function bacl() {debugger;}; cjVm.safefunction(History.prototype.back);

////////////////////////////////////////////
history = {};
history.__proto__ = History.prototype;

history = cjVm.proxy(history);