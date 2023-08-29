var HTMLCanvasElement = function HTMLCanvasElement() {
    // 不允许被创建
    throw new TypeError("Illegal constructor");
}; cjVm.safefunction(HTMLCanvasElement);

Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});

HTMLCanvasElement.prototype.getContext = function getContext() {
    if (this.getAttribute === "undefined" ) {}
};