
    var obj = { x: 2, y: 4, y: 5};
    var arr = [10, 20, 30, 40, 50];

    for(var propName in obj)
        console.log("obj." + propName + ": " + obj[propName]);

    // propName -> name of every single element in object, for example: x
    /* Values can be accessed by several ways:

        -> obj["x"]
        -> obj.x

     */

    for (var index in arr)
        console.log("arr[" + index + "] = " + arr[index]);