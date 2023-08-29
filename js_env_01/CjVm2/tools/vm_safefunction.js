//用来保护伪造的函数 使其变得更难被检测识破
;;;;
(() => {
    "use strict";
    const $toString = Function.toString;
    //get
    const myFunc_toStr_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToStr = function() {
        return typeof this == 'function' && this[myFunc_toStr_symbol] || $toString.call(this);
    }
    function set_native(func, key, val) {
        Object.defineProperty(func, key,  {
            "configurable": true,
            "enumerable": false,
            "writable": false,
            "value": val
        })
    };
    //删除原型链上的toString
    delete Function.prototype["toString"];
    //自定义getter方法
    set_native(Function.prototype, "toString", myToStr);
    set_native(Function.prototype.toString, myFunc_toStr_symbol, "function toString() { [native code] }");
    this.cjVm.safefunction = (func) => {
        set_native(func, myFunc_toStr_symbol, `function ${myFunc_toStr_symbol, func.name || ''}() { [native code] }`)
    };
}).call(this);

