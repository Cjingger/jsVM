var EventTarget = function EventTarget() {

}; //构造函数
cjVm.safefunction(EventTarget) ;

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});

EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    if (!(type in cjVm.memory.listeners)) {
        cjVm.memory.listeners[type] = [];
    }
    cjVm.memory.listeners[type].push(callback);
}

//触发调用事件
EventTarget.prototype.dispatchEvent = function dispatchEvent() { 
    debugger;
}; cjVm.safefunction(EventTarget.prototype.dispatchEvent) ;

EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;
}; cjVm.safefunction(EventTarget.prototype.removeEventListener) ;

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
    value: "EventTarget",
    configurable: true
    }
});