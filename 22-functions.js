
    // Function example
    function test(n1, n2) {
        console.log("Summary: " + (n1 + n2));
    }

    test(3, 5);

    // Function by using Function object
    var test2 = new Function("n1", "n2", "console.log('Multiplication = ' + (n1 * n2))");
    test2(2, 6);

    // Parameters on function

    function func1(x, y, z){
        console.log("This is func1");
        console.log("x: " + x + ", y: " + ", z: " + z);
    }

    func1(10, 20); // x = 10, y = 20, z = undefined
    func1(10); // x = 10, y = undefined
    func1(); // x = y = z = undefined

    function func2(){
        console.log("This is func2");
        console.log(arguments);
    }

    func2(20, 30); // does not throw error, parameters can be accessed by using 'arguments'

    // Func example
    console.log("Another function (expo()) example...")
    var expo = function (numb, pow){
        var res = 1;
        for (var i = 0; i < pow; i++)
            res *= numb;
        return res;
    }

    console.log("Result of expo(): " + expo(3, 5));

    console.log("Another function (least()) example...");
    var theLeast = function (arr){
        if (arr.length === 0)
            return ;

        var min = arr[0];

        for (var i = 1; i < arr.length; i++){
            if (min > arr[i])
                min = arr[i];
        }

        console.log("Result of theLeast(): " + min);

    }

    theLeast([10, 20, 5, 2, 36, -1, -7]);

    console.log("Another function (modular()) example...");
    var modular = function (numb1, numb2){
        var result = Math.floor(numb1 / numb2);
        var mod = numb1 - result * numb2;
        console.log("Result of modular(): " + mod);
    }

    modular(5, 3);

