
    // for...of

    // On string
    let str = "JavaScript EcmaScript 6";
    for (let i of str)
        console.log(i);

    console.log("******************");

    // On array
    let arr = [5, 10, 20];
    for (let i of arr){
        console.log(i)
    }

    console.log("******************");

    // On Maps
    const map = new Map([['a',1], ['b',2], ['c',3]]);

    // First method
    for (let i of map)
        console.log(i);

    for (let [key, value] of map){
        console.log(value);
    }

    console.log("******************");

    // On Set
    const set = new Set([1,1,2,3,3,3,4,4]);
    for (let i of set)
        console.log(i);