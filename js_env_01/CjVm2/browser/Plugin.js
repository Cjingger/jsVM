cjVm.memory.Plugin = {};

var Plugin = function Plugin() {
    throw new TypeError("illegal constructor");
}; cjVm.safefunction(Plugin);

//迭代器实现
cjVm.memory.Plugin.iterator = function values() {
    debugger;
    return {
        next: function () {
            if (this.index_ == undefined) {
                this.index_ = 0;
            }
            var temp = this.self_[this.index_];
            this.index++;
            if (temp != undefined) {
                return {value: temp,
                    done: false}; 
            } else {
                return {value: temp,
                    done: true}; 
            };
            
        },
        self_: this
    }
}; cjVm.safefunction(cjVm.memory.Plugin.iterator);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    [Symbol.iterator]: {
        value: cjVm.memory.Plugin.iterator,
        configurable: true
    }
});

/////////////////////////////////////////////////
//补原型
Plugin.prototype.description = "";
Plugin.prototype.filename = "";
Plugin.prototype.name = "";
Plugin.prototype.length = "";

Plugin.prototype.item = function item(index) {
    debugger;
    return this[index];
}; cjVm.safefunction(Plugin.prototype.item);
Plugin.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; cjVm.safefunction(Plugin.prototype.namedItem);

for (var pr in Plugin.prototype) {
    if (typeof(Plugin.prototype[pr]) != "function")
    {
        Plugin.prototype.__defineGetter__(pr, function() {
            throw new TypeError("illegal constructor");
        });
    }
};

/////////////////////////////////////////////////
//补实例
cjVm.memory.Plugin.new = function(data) {
    var plugin = {};
    plugin.__proto__ = Plugin.prototype;
    if (data != undefined) {
        plugin.description = data.description;
        plugin.filename = data.filename;
        plugin.name = data.name;
    };
    //MimeType
    if (data.MimeTypes != undefined) {
        for (let mtIndex = 0; mtIndex < data.MimeTypes.length; mtIndex++) {
            var mimeTypedata = data.MimeTypes[mtIndex];
            var mimeType = cjVm.memory.MimeType.new(mimeType, plugin);
            plugin[mtIndex] = mimeType;
            // plugin[mimeType.type] = mimeType;
            Object.defineProperty(plugin, mimeType.type, {
                value: mimeType
            });
        }
        plugin.length = data.MimeTypes.length;
    }

    return plugin;
}