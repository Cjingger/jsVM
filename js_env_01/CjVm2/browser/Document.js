var Document = function Document() {

}; //构造函数
cjVm.safefunction(Document);

Object.defineProperties(Document, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
})

document = {};
document.__proto__ = Document.prototype;
////////////////////////////////////////////
document.cookie = "";
document.referer = location.href || "";
document.addEventListener = function addEventListener(type, listener, options, useCapture) {
    debugger
}; cjVm.safefunction(document.addEventListener);

document.getElementById = function getElementById(id) {
    debugger;
    return null
}; cjVm.safefunction(document.getElementById);

document.querySelector = function querySelector(s, t) {
    debugger
}; cjVm.safefunction(document.querySelector);

// document.body.append(document.createElement("span"))
// setAttribute getAttribute

document.createElement = function createElement(tagName, options) {
    var tagName = tagName.toLowerCase() + "";
    if (cjVm.memory.htmlelements[tagName] == undefined) {
        debugger
    }
    return cjVm.proxy(cjVm.memory.htmlelements[tagName]());
}

document.onreadystatechange

////////////////////////////////////////////


document = cjVm.proxy(document);