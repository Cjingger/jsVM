var WindowProperties = function WindowProperties() {

}; //构造函数
cjVm.safefunction(WindowProperties);

Object.defineProperties(WindowProperties.prototype,{
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
});

WindowProperties.prototype.__proto__ = EventTarget.prototype; 