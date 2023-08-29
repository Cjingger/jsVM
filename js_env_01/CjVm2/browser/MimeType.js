cjVm.memory.MimeType = {}

var MimeType = function MimeType() {
    throw new TypeError("illegal constructor");
}; cjVm.safefunction(MimeType);

Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    }
});

///////////////////////////////////////////////////////
MimeType.prototype.description = "";
MimeType.prototype.enabledPlugin = null;
MimeType.prototype.suffixes = "";
MimeType.prototype.type = "";
for (var mt in MimeType.prototype) {
    if (typeof(MimeType.prototype[mt]) != "function")
    {
        MimeType.prototype.__defineGetter__(mt, function() {
            throw new TypeError("illegal constructor");
        });
    }
};

///////////////////////////////////////////////////////
cjVm.memory.MimeType.new = function(data, initPlugin) {
    var mimeType = {};
    if (data != undefined) {
        mimeType.description = data.description;
        mimeType.suffixes = data.suffixes;
        mimeType.type = data.type;
        mimeType.enabledPlugin = initPlugin;

    }

    mimeType.__proto__ = MimeType.prototype;
    return mimeType
}
