
    // New String and Number methods

    // String methods

    // Repeat

    let rep = "Warning! ";
    let str = rep.repeat(5);

    console.log(str);

    // Starts with

    let sWith = "Hello"
    str = "Hello sir!"

    console.log("starts with 'Hello'? :" + str.startsWith(sWith));

    // Start with (using param)

    sWith = "sir"
    let eWith = "sir!";

    console.log("starts with 'sir' on 6. index? :" + str.startsWith(sWith,6));
    console.log("ends with 'sir!'? :" + str.endsWith(eWith));

    let inc = "sir";
    console.log("lncludes 'Hello'? :" + str.includes(inc));

    // Number methods

    // isFinite: controls whether value is a number or not

    console.log("isFinite:")
    console.log("'7' -> " + isFinite('7'));
    console.log("7 -> " + isFinite(7));
    console.log("3.14 -> " + isFinite(3.14));
    console.log("true -> " + isFinite(true));
    console.log("NaN -> " + isFinite(NaN));
    console.log("Infinity -> " + isFinite(Infinity));

    console.log("***********************");

    console.log("isNaN:")
    console.log("'7' -> " + isNaN('7'));
    console.log("7 -> " + isNaN(7));
    console.log("3.14 -> " + isNaN(3.14));
    console.log("true -> " + isNaN(true));
    console.log("NaN -> " + isNaN(NaN));
    console.log("Infinity -> " + isNaN(Infinity));

    console.log("***********************");

    console.log("isInteger:") // Can use isSafeInteger instead
    console.log("'7' -> " + Number.isInteger('7'));
    console.log("7 -> " + Number.isInteger(7));
    console.log("3.14 -> " + Number.isInteger(3.14));
    console.log("true -> " + Number.isInteger(true));
    console.log("NaN -> " + Number.isInteger(NaN));
    console.log("Infinity -> " + Number.isInteger(Infinity));

    console.log("***********************");

    // Constants

    let s1 = Number.EPSILON;
    let s2 = Number.MAX_SAFE_INTEGER;
    let s3 = Number.MIN_SAFE_INTEGER;

    console.log("Epsilon: " + s1);
    console.log("Max safe integer: " + s2);
    console.log("Min safe integer: " + s3);