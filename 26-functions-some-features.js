
    // Caller feature
    console.log("Caller example!")
    var summary = function (){
    // parameters of process function
    // summary.caller = process()
        for (var i = 0; i < summary.caller.arguments.length; i++)
            console.log("process.arguments[" + i + "] = " + summary.caller.arguments[i]);
    }

    function process(a, b){
        summary();
    }

    process(5, 10, 'a');

    // Length feature
    // Returns determined parameter value of the function
    console.log("Length example!")
    function process2(a, b){
        console.log("process2.length: " + process2.length);
        console.log("process2.arguments: " + process2.arguments);
    }

    process2(5, 10, 34, 45);