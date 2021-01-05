
    var id = 55; // number type
    var name = "John" // string type

    var d1 = 23; // integer
    var d2 = 2.3; // decimal
    var d3 = 070 // octal (equals 56)
    var d4 = 0xB; // hexadecimal (equals 11)

    // The biggest value of number (equals 1.7976931348623157e + 308)
    var theBiggestValue = Number.MAX_VALUE;

    // The least value of number (equals 5e - 324)
    var theLeastValue = Number.MIN_VALUE;

    // Positive infinite
    var positiveInfinite = Number.POSITIVE_INFINITY;

    // Negative infinite
    var negativeInfinite = Number.NEGATIVE_INFINITY;

    // Special NaN value
    var notNumber = Number.NaN;

    // Boolean values
    var a = true;
    var b = false;

    // String values
    var name = "Taha";
    var surname = "Topal";
    var course = "C3";
    var number = "1231";

    var another_name = 'Name';

     // Undefined data type
    var data1; // Undefined
    var data2; // Undefined
    console.log(data1); // Will print 'undefined'
    console.log(data1*d1); // Will print 'NaN'

    // Null data type
    var n1 = null;
    var n2 = 25;
    var n3 = n1 + n2;
    console.log(n3); // Will print 25

    var str1 = null;
    var str2 = 'abc';
    var str3 = str1 + str2;
    console.log(str3); // Will print 'nullabc'

    // Object Literal
    var ball = {x:12, y:12, radius:30};
    console.log(ball);
