
    // Some features
    console.log("E: " + Math.E);
    console.log("PI " + Math.PI);
    console.log("LN2: " + Math.LN2);
    console.log("LN10: " + Math.LN10);
    console.log("LOG2E: " + Math.LOG2E);
    console.log("LOG10E: " + Math.LOG10E);
    console.log("SQRT1_2: " + Math.SQRT1_2);
    console.log("SQRT2: " + Math.SQRT2);

    // *** Methods *** //

    // abs(): returns the abstract value of parameter
    console.log("abs of -12: " + Math.abs(-12));

    // asin(): calculates arc sinus
    console.log("arc sinus of 1: " + Math.asin(1));

    // atan(): calculates arc tangent
    console.log("arc tangent of PI: " + Math.atan(Math.PI));

    // atan2(y,x): calculates arc tangent of (y/x)
    console.log(Math.atan2(Math.PI, 1));

    // ceil(): rounds the decimal number to upper limit
    console.log("ceiling method on 12.01: " + Math.ceil(12.01));
    console.log("ceiling method on 12.56: " + Math.ceil(12.56));
    console.log("ceiling method on 12.01: " + Math.ceil(-12.55));

    // cos(): calculates cosinus
    console.log("cos of 60: " + Math.cos(60));

    // sin(): calculates sinus
    console.log("sinus of 30: " + Math.sin(30));

    // tan(): calculates tangent
    console.log("tangent of 90: " + Math.tan(90));

    // exp(): calculates exponential
    console.log("e power 2: " + Math.exp(2));

    // floor(): rounds the decimal number to lower limit
    console.log("floor method on 12.01: " + Math.floor(12.01));
    console.log("floor method on 12.56: " + Math.floor(12.56));
    console.log("floor method on 12.01: " + Math.floor(-12.55));

    // log(): calculates logarithm on base E; if parameter is negative, returns NaN
    console.log("log(10): " + Math.log(Math.E));

    // min(): returns lesser one between the parameters
    // max(): returns greater one between the parameters
    console.log("the lesser one between 5 and 10: " + Math.min(5, 10));
    console.log("the greater one between 5 and 10: " + Math.max(5, 10));

    // pow(x,y): returns y. power of x
    console.log("3 power 4: " + Math.pow(3, 4));

    // random(): generetes a random number between 0 and 1 (includes 0)
    console.log("First random: " + Math.random());
    console.log("Second random: " + Math.random());
    console.log("Third random: " + Math.random());

    // round(): rounds the number
    console.log("round(12.56): " + Math.round(12.56));
    console.log("round(-12.56): " + Math.round(-12.56));
    console.log("round(12.5): " + Math.round(12.5));
    console.log("round(-12.5): " + Math.round(-12.5));
    console.log("round(12.46): " + Math.round(12.46));
    console.log("round(-12.44): " + Math.round(-12.44));
