
    // Some ways to describe an array,

    var arrVal1 = new Array(); // -> length: 0
    // or
    var arrVal2 = new Array(5); // -> length: 5

    console.log("Length of arrVal1: " + arrVal1.length);
    console.log("Length of arrVal2: " + arrVal2.length);

    var arr1 = new Array();
    arr1[0] = 10;
    arr1[1] = 20;
    arr1[2] = 'Data Type';
    arr1[3] = 40;

    console.log("Values of arr1...")
    for (var index in arr1)
        console.log(arr1[index]);

    var arr2 = new Array(3);
    arr2[0] = 'a';
    arr2[1] = 'b';
    arr2[2] = 2;

    arr2[3] = "new" // Size of arr2 will be changed automatically

    console.log("Values of arr2...")
    for (var index in arr2)
        console.log(arr2[index]);

    // Declaring an array with initial elements
    var arr3 = new Array(1,2,"three",4,5,"six"); // Size will be 6
    var arr4 = new Array(13,23,'thirty-three',43,53,'sixty-three');

    var arr5 = [10, 20, 30, 40, 50];
    console.log("Elements of arr5...")
    for(var i = 0; i < arr5.length; i++)
        console.log(arr5[i]);
