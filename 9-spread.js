
    // Logging/Printing
    let arr = [5, 10, 15, 20, 25, 30];

    console.log("Printing with traditional way...")
    for (let i in arr)
        console.log(i);

    console.log("Printing with spread")
    console.log(...arr);

    // Array concat

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 0];

    console.log("Concat and print in traditional way");
    let joinArr = [arr1, arr2]
    console.log(joinArr);

    console.log("Concat and print in traditional way");
    let mergeArr = [...arr1,...arr2];
    console.log(mergeArr);

    // Function arguments
    console.log("Array function !!!")
    let func = (a,b,c) => a+b+c;
    let funcArr = [5,12,13];

    console.log(func(...funcArr));