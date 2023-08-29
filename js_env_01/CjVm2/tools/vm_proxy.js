//框架代理功能
cjVm.proxy = function vmProxy(o) {
    if (cjVm.memory.config.proxy == false) {return o};
    return new Proxy(o, {
        set(obj, prop, val)
        {  
            console.table({"类型": "set>---", "调用者": obj, "属性": prop, "值": val});
            // console.log("set " + obj + prop + val);
            return Reflect.set(...arguments);
        },
        get(obj, prop, receiver)
        {
            console.table({"类型": "get<---", "接收者": receiver, "属性": prop, "值": obj[prop]});
            // console.log("get " + obj, prop + val);
            return obj[prop];
        }
     
    });
}

// navigator = vmProxy(class navigator{});
// document = vmProxy(class document{});

// location = vmProxy(class location{});



