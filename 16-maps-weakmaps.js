
    // Maps

    let map = new Map();
    let map2 = new Map([[1, "String1"], [2, "String2"]]);

    // set
    map.set(1, "Entry1");
    map.set(2, "Entry2");
    map.set(3, "Entry3");
    map.set(4, "Entry4");

    // size
    console.log("size: " + map.size);

    // keys
    console.log("keys:")
    console.log(map.keys());

    // values
    console.log("values:")
    console.log(map.values());

    // get
    console.log("get 1: " + map.get(1));
    console.log("get 5: " + map.get(5));

    // has
    console.log("has 2: " + map.has(2));
    console.log("has 6: " + map.has(6));

    // delete
    map.delete(4);
    console.log("Size after deleting: " + map.size);

    // clear
    map.clear();
    console.log("Size after clearing: " + map.size);
