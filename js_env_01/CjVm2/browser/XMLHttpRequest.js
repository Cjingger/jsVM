var XMLHttpRequest = function XMLHttpRequest() {
    //Navigator不能被new
    debugger;
}; //构造函数
cjVm.safefunction(XMLHttpRequest);

Object.defineProperties(XMLHttpRequest, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest",
        configurable: true
    }
});