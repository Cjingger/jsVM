var Location = function Location() {
    //Location不能被new
    throw new TypeError("illegal constructor");
}; //构造函数
cjVm.safefunction(Location);

Object.defineProperties(Location, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
})
////////////////////////////////////////////


////////////////////////////////////////////
location = {};
location.__proto__ = Location.prototype;

location.href = "";

location = cjVm.proxy(location);