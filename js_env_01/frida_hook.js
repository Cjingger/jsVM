Java.perform(
    function() {
        Java.cast("package.")
        var de_cls = Java.use("java.lang.Delay");
        de_cls.fun.overload("int", "int").implement = function(x, y) { return x + y };
        var new_str = de_cls.$new("new string");
        
    }
);

//类名触发回调函数
Java.choose("com.roysue.demo02.MainActivity" , {
    onMatch : function(instance){ //该类有多少个实例，该回调就会被触发多少次
      console.log("Found instance: "+instance);
      //隐藏函数
      console.log("Result of secret func: " + instance.secret());
    },
    onComplete:function(){}
  });

//拦截器
;;;;
!function frida_java(){
    Java.perform(function() {
        //拦截getStr函数
        Interceptor.attach(Module.findExportByName("libhello.so", "Java_com_roysue_roysueapplication_hellojni_getStr"), {
            onEnter: function(args) {
                console.log("getStr");
            },
            onLeave: function(retval) {
                //替换结果
                var env = Java.vm.getEnv();
                //通过newStringUtf方法构建一个jstirng字符串
                var jstring = env.newStringUtf('roysue');
                //replace替换掉结果
                retval.replace(jstring);    
            }
        });
    })
}


function frida_ios(){
    Java.perform(function() {
        var objC = Java.use("com.c.Object");
        if(objC.available) {
            for(let calssName in  objC.classes) {
                console.log("", calssName);
                //获取该类的所有方法
                var methods = Java.eval('ObjC.classes.' + calssName + '.$methods');
            }
        }
    });
}
