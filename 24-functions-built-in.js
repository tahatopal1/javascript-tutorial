
    // Built-in Functions

    // eval():
    console.log("eval() function:")
    console.log("Example 1:")

    var x = '10 + 5 * 3'; // x = '10 + 5 * 3'
    var y = eval("10 + 5 * 3");

    console.log("x = " + x);
    console.log("y = " + y)

    console.log("Example 2:")

    var z = eval("10 + 5*'b'"); // z = NaN
    var t = eval("10 + 5 * true"); // t = 15, (true = 1)
    var z = eval("10 + 5 * false"); // z = 10, (false = 0)

    console.log("z = " + z);
    console.log("t = " + t);
    console.log("z = " + z);

    // isNan():
    console.log("isNan() function:")
    var test = function (n){
        if (isNaN(n))
            return "Not a number";
        return "This is a number";
    }

    console.log("12: " + test(12));
    console.log("12.45: " + test(12.45));
    console.log("'abc': " + test('abc'));

    // escape() and unescape():
    console.log("escape() and unescape() functions:")
    var esc = escape("global variables.*");
    var unesc = unescape(esc);
    console.log("esc: " + esc);
    console.log("unesc: " + unesc);

    // encodeURI() and decodeURI():
    console.log("encodeURI() and decodeURI() functions:")
    var uriEncode = encodeURI("kisi sayfa.aspx?adı=sena&yaşı=4");
    var uriDecode = decodeURI(uriEncode);

    console.log("uriEncode: " + uriEncode);
    console.log("uriDecode: " + uriDecode);

    // encodeURIComponent() and decodeURIComponent():
    console.log("encodeURIComponent and decodeURIComponent functions:");
    uriEncode = encodeURIComponent("kisi sayfa.aspx?adı=sena&yaşı=4");
    uriDecode = decodeURIComponent(uriEncode);

    console.log("uriEncode: " + uriEncode);
    console.log("uriDecode: " + uriDecode);

    //parseInt():
    console.log("parseInt() function:")
    console.log("Example 1!")
    var numbers = [[" 0xC", 16], [" C", 16],
        ["14", 8], ["012", 10],
        ["12", 10], [12.88, 10],
        ["1100", 2], ["12*3", 10],
        ["12e+2", 10], ["12px", 10],
        ["12"]];

    for (var i = 0; i < numbers.length; i++){
        var param1 = numbers[i][0];
        var param2 = numbers[i][1];
        console.log("parseInt(" + param1 + ", " + param2 + ") = " + parseInt(param1, param2));
    }

    console.log("Example 2!");
    console.log("544 on binary: " + parseInt(544, 2));
    console.log("'sixteen' on hexadecimal: " + parseInt("sixteen", 16));
    console.log("'ee' on decimal: " + parseInt('ee', 10))

    console.log("parseFloat() function:")
    numbers = [1.67,25, "01.67", '1.67ff', "167e-2", "25johnson.", ".67", "f1.67"];

    for (var i = 0; i < numbers.length; i++)
        console.log("parseFloat(" + numbers[i] + ") = " + parseFloat(numbers[i]));

    // String():
    console.log("String() function:")
    var values = [undefined, null, true, false, NaN, 17]
    for (var i = 0; i < values.length; i++)
        console.log("String(" + values[i] + ") = " + String(values[i]));

    // Number();
    console.log("Number() function:")
    values = [undefined, null, true, false, NaN, "", "10", "20a"];
    for (var i = 0; i < values.length; i++)
        console.log("Number(" + values[i] + ") = " + Number(values[i]));

