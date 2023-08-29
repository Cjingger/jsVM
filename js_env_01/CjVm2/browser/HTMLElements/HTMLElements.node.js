var fs = require("fs");

// var vmtools = require("./tools/tools.node.js");
// var htmlelement = require("./HTMLElements/HTMLDivElement.js")

 
function GetCode() {
    var code = "";

    //引入浏览器相关
    code += fs.readFileSync(`${__dirname}/Window.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/Location.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/Navigator.js`) + "\r\n";
}

module.exports = {
    GetCode
}