
Java.perform(function() {
    var MainActivity = Java.use("com.example.insecure_app.MainActivity");

    MainActivity.getGreeting.implementation = function () {
        console.log("[*] getGreeting hooked; returning fake value.");
        return "Hello from firda!";
    };
});

