window = this;

var Window = function Window() {
    //容易被检测到的堆栈
    throw new TypeError("illegal constructor");
};

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});

////////////////////////////////////////////
Window.setTimeout = function setTimeout(x, d) {
    typeof(x) == "function" ? x(): undefined;
    typeof(x) == "string" ? eval(x): undefined;
    //生成·uuid 保存到内存
    return 0;
}

Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
window.open = function open() {debugger; }; cjVm.safefunction(window.open);
//创建chrome对象
window.chrome = cjVm.proxy(class chrome{});
window.DeviceOrientationEvent = function DeviceOrientationEvent() {debugger; }; cjVm.safefunction(window.DeviceOrientationEvent);
window.localStorage = class localStorage{};
window.localStorage.getItem = function getItem() {debugger; }; cjVm.safefunction(window.localStorage.getItem);
window.localStorage.setItem = function setItem() {debugger; }; cjVm.safefunction(window.localStorage.setItem);
window.localStorage.removeItem = function removeItem() {debugger; }; cjVm.safefunction(window.localStorage.removeItem);

window.localStorage = cjVm.proxy(window.localStorage);
////////////////////////////////////////////


Window.prototype.__proto__ = WindowProperties.prototype;

Window = cjVm.proxy(Window);
window = cjVm.proxy(window);
