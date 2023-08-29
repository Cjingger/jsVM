var HTMLDocument = function HTMLDocument() {
    //Navigator不能被new
    throw new TypeError("illegal constructor");
}; //构造函数
cjVm.safefunction(HTMLDocument);

Object.defineProperties(HTMLDocument, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
})
////////////////////////////////////////////

////////////////////////////////////////////
HTMLDocuments = {};
HTMLDocuments.__proto__ = HTMLDocument.prototype;

history = cjVm.proxy(history);