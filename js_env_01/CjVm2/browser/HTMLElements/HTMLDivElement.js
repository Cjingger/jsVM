var HTMLDivElement = function HTMLDivElement() {
    // 不允许被创建
    throw new TypeError("Illegal constructor");
}; cjVm.safefunction(HTMLDivElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});

//真实的div
cjVm.memory.htmlelements["div"] = function () {
    var div = new (function() {});
    ///////////////////////////////////////////////////
    div.margin = "";
    div.align = "";
    div.border = "";
    ///////////////////////////////////////////////////
    div.__proto__ = HTMLDivElement.prototype;
    return div;
};
