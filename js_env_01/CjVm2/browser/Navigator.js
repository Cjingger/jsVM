const { randomInt } = require("crypto");

cjVm.memory.Navigator = {};
var Navigator = function Navigator() {
    //Navigator不能被new
    throw new TypeError("illegal constructor");
}; //构造函数
cjVm.safefunction(Navigator);

var navigatorProto = {};

Object.defineProperties(navigatorProto, {
    constructor: {
        value: Navigator,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
})

////////////////////////////////////////////
Navigator.prototype.plugins = [];
Navigator.language = ["zh-CN", "zh"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';



//实例
////////////////////////////////////////////
for (cjVm.memory.Navigator.temp in Navigator.prototype) {
    navigator[cjVm.memory.Navigator.temp] = Navigator.prototype[cjVm.memory.Navigator.temp];
    Navigator.prototype.__defineGetter__(cjVm.memory.Navigator.temp, function() {
        throw new TypeError("illegal constructor");
    });
}

navigator.__proto__ = Navigator.prototype;
for (let _prototype in Navigator.prototype) {
    //原型上所有方法赋值给实例
    navigator[_prototype] = Navigator.prototype[_prototype];
    //原型上所有的get方法hook
    Navigator.prototype.__defineGetter(key, function () {
        debugger;
    });
}
var r =  randomInt();

navigator = {};
navigator.__proto__["vendor"] = "Google Inc.";
navigator.__proto__["vendorSub"] = "";
navigator.__proto__["productSub"] = "20030107";
navigator.__proto__["userAgent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
navigator.__proto__["appCodeName"] = "Mozilla";
navigator.__proto__["appName"] = "Netscape";
navigator.__proto__["appVersion"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
navigator.__proto__["platform"] = "Win32";
navigator.__proto__["product"] = "Gecko";


navigator.__proto__ = Navigator.prototype;

navigator = cjVm.proxy(navigator);