
    // Differences between var and let

    var i = 5;
    var i = 10; // This is a valid declaration

    let j = 5;
    j = 10; // This is a valid declaration
    // let j = 15 -> Error !!!

    "use strict";

    var x = 7;
    if (x === 7){
        var message = "JavaScript EcmaScript 6";
        console.log("inside the if: " + message);
    }

    console.log("outside the if: " + message); // Will print
    console.log("***************************")

    try{
        var y = 5;
        if (y === 5){
            let message2 = "Let Usage EcmaScript 6";
            console.log("inside if" + message2);
        }

        console.log("outside if" + message2); // Will throw error

    }catch (err){
        console.log(err.message); // Will print
    }

    console.log("***************************")


    // for loop with var example
    var i = 7;
    for (var i = 0; i < 5; i++){

    }

    console.log("var result: " + i);

    // for loop with let example
    let t = 7;
    for (let t = 0; t < 5; t++){

    }

    console.log("let result: " + t);
