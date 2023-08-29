function switchX(pr, foo, _name) {
    var code = "";
    switch (typeof(pr.foo)) {
        case "string":
            code = _name + ".prototype." + foo + "=" + pr[foo];
            break
        case "function":
            var temp = _name + ".prototype." + foo + ".name";
            code = _name + ".prototype." + foo + "=" + "function" + foo + "(){debugger;}; cjVm.safefunction(" + temp + ");";
            break
        case "object":
            var temp = _name + ".prototype." + foo + ".name";
            code = temp + "=" + "catProxy(class " + foo + "{});";
            break

        default:
            code = _name + ".prototype." + foo + "=" + pr[foo];
            break
    }
    return code;
}

function getCode(proto, _name)
{
    var code = "";
    // var foo in protp.prototype
    for (var foo in proto.__proto__) {
        code += switchX(proto, foo, _name) + "\r\n";
    }
    return code;
}