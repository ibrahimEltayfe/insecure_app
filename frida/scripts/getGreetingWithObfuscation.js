Java.perform(function () {
    const TargetClass = Java.use("d0.a");

    TargetClass.q.implementation = function (call, result) {
        result.c("HOOKED FROM FRIDA!");
    };
});