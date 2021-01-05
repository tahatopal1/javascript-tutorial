
    var comparision = '3' == 3; // regular comparision
    console.log(comparision);

    comparision = '3' === 3; // strict comparision
    console.log(comparision);

    comparision = '3' != 3; // negative comparision
    console.log(comparision);

    comparision = '3' !== 3; // negative strict comparision
    console.log(comparision);

    comparision = '3' < '1';
    console.log(comparision); // prints false,

    console.log("--------------------------------");

    /* Special Operators */

    // Conditional Operator

    var a = 10;
    a = (a < 11) ? 11: a;
    console.log(a);

    console.log("--------------------------------");

    // Comma Operator
    var j = 9;
    for(var i = 0; i < 10; i++, j--){
        console.log("i = " + i + " j = " + j);
    }

    console.log("--------------------------------");

    // Delete Operator

    var object = {attr1: 10, attr2: "Name"};
    delete object.attr1; // Deletes attr1 attribute of 'object'
    console.log(object); // Prints only attr2

    var arr1 = new Array(10, 20, 30, 40, 50);
    delete arr1[0]; // Deletes first indice of arr1
    console.log(arr1); // Does not print element in the first indice

    console.log("--------------------------------");

    // In Operator
    var triangle = {edge1: 10, edge2: 8, edge3: 6};
    console.log('edge1' in triangle); // Prints true
    console.log('edge4' in triangle); // Prints false

    console.log("length" in arr1); // Returns true, arrays has the 'length' attribute
    console.log(0 in arr1); // Checks if the indice is used, we deleted the value in the first indice before, return false
    console.log(1 in arr1); // Second indice is not empty, returns true

    console.log("--------------------------------");

    // TypeOf Operator
    console.log(typeof "sample"); // Prints string
    console.log(typeof 123); // Prints number
    console.log(typeof true); // Prints boolean

    var v1 = null;
    console.log(typeof v1); // Prints object

    var v2;
    console.log(v2); // Prints undefined