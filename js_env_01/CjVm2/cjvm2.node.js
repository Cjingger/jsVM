var fs = require("fs");
//框架工具模块
var vmtools = require("./tools/tools.node");
var htmlelements = require("./browser/HTMLElements/HTMLElements.node");

function Run(config, func_str) {
    var code = "";
    //引入框架工具代码
    code += vmtools.GetCode() + "\r\n";
    //引入用户框架配置
    for (var i in config) {
        code += "cjVm.memory.config." + i + "=" + config.i + ";\r\n";

    }
    code += func_str + ";\r\n";
    // code += "cjVm.memory.config = " +  JSON.stringify(config);
    code += "cjVm.memory.config.proxy = true;\r\n";
    //引入浏览器相关
    // code += fs.readFileSync(`${__dirname}/browser/Document.js`) + "\r\n";
    // code += fs.readFileSync(`${__dirname}/browser/Element.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Event.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/History.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Storage.js`) + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/MimeType.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Plugin.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/PluginArray.js`) + "\r\n";

    code += htmlelements.GetCode() + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Document.js`);
    //引入用户自定义环境

    code += "debugger;" + "\r\n";
    return code;
}

module.exports = {
    Run
}