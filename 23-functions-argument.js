
    // Sample 1
    console.log("Sample 1!")
    var arg = function (p1, p2){
        for (var i = 0; i < arguments.length; i++)
            console.log("arguments[" + i + "] = " + arguments[i]);

    }

    arg(23, 33, 43, 53, 63);

    // Sample 2
    console.log("Sample 2!");
    var arg2 = function (p1, p2){
        arguments[0] = 5;
        p2 = 10;

        for (var i = 0; i < arguments.length; i++)
            console.log("arguments[" + i + "] = " + arguments[i]);

    }

    arg2(23, 33, 43);

    // Sample 3
    console.log("Sample 3!");
    var arg3 = function (p1, p2){
        var arguments = 12;
        console.log("arguments object: " + arguments);
        console.log("function arguments " + arg3.arguments);
    }

    arg3(23, 33, 43);

    // Sample 4
    console.log("Sample 4!");
    var arg4 = function (){
        var greatest = arguments[0];
        for (var i = 1; i < arguments.length; i++){
            if (arguments[i] > greatest)
                greatest = arguments[i];
        }

        return greatest;
    }

    console.log("The greatest value: " + arg4(10,30,11,50,21));