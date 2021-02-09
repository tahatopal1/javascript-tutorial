
    // Declarations
    let set1 = new Set([1,2,3,4,5]);
    let set2 = new Set();

    set2.add(10);
    set2.add("String");
    set2.add(true);

    console.log("After adding elements...");
    set2.forEach((elm) => console.log(elm));

    console.log("Usage of has method");
    console.log("has 10: " + set2.has(10));
    console.log("has 'Hello': " + set2.has("Hello"));

    console.log("Length of set2: " + set2.size);

    set2.delete(10);
    console.log("Length after removing: " + set2.size);

    set2.clear();
    console.log("Length after cleanse: " + set2.size);