var fs = require("fs");
var catvm2 = require('./CjVm2/cjvm2.node');

//使用Proxy来监测浏览器环境API的使用，辅助补浏览器环境
//Proxy是ES6提供的代理器，用于创建一个对象的代理，从而实现基本操作的拦截和自定义(如属性查找、赋值、枚举、函数调用等).它可以代理任何类型的对象，包括原生数组，函数，甚至另一个代理；拥有递归套娃的能力
//当我们代理某个对象后 任何JS代码对它的任何操作都可以被我们拦截

//纯净v8环境沙箱
const {VM, VMScript} = require("vm2");
func_text = `cjVm.addPlugin({description: "Portable Document Format", filename: "internal-pdf-viewer", name: "Chrome PDF Plugin", MimeType: [{description: "Portable Document Format", suffixes: "pdf", type: "application/pdf"}, {}]})` 
var catvm2_code = catvm2.Run({
    proxy: true,
    print: true
}, func_text);  //获取所有代码（工具代码、补的所有BOM、DOM对象）
var web_js_code = fs.readFileSync(`${__dirname}/kuaishou.js`) ; // 获取目标网站js代码
var log_code = "\r\ncjVm.print.getAll();debugger;\r\n";
var log_code = "\r\nconsole.log(process);debugger;\r\n";
var all_code = catvm2_code+web_js_code+log_code;
// var all_code = "window = this;\r\ndebugger;\r\n"
fs.writeFileSync(`${__dirname}/debugger_bak.js`, all_code); 
const script = new VMScript(all_code, `${__dirname}\\debugger_code.js`); //真实路径，浏览器打开的就是该缓存文件

const vm = new VM();
debugger;
vm.run(script);
debugger;

//变量名重复问题 调试日志
//window.proxy window.catVM

//创建对象
// {}; Object.create({}) class window{}; function window(){} ; new window;
//一切皆对象
var a = {}; //实例 
var b = class b{}; //实例
var c = new (function() {}); //实例
var d = Object(); //实例
var e = Object.create({}); //实例
//区分实例与原型对象
//__proto__ 实例才有此属性
/**
 * 实例调用 __proto__ 返回实例的原型
 * 原型调用 __proto__ 返回父类的原型/实例
 * 原型调用 prototype 返回原型本身
 */



for (var _prototype in Navigator.prototype) {
    navigator[_prototype] = Navigator.prototype[_prototype];
    if (typeof (Navigator.prototype[_prototype]) != "function") {
        Navigator.prototype.__defineGetter__(_prototype, function () {
            debugger;
            var e = new Error();
            e.name = "TypeError";
            e.message = "Illegal constructor";
            e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n " +
                "at <anonymous>:1:21";
            throw e;
            // throw new TypeError("Illegal constructor");
        });
    }
}