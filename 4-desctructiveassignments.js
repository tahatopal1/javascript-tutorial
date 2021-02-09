
    // Multiple assignment for arrays

    let arr = [10, 20, 30, 40, 50, 60, 70];
    let [item1, , item2,item3, , , item4] = arr;

    console.log("item1 = " + item1);
    console.log("item2 = " + item2);
    console.log("item3 = " + item3);
    console.log("item4 = " + item4);

    // Multiple assignment for objects

    let obj = {name: 'Nikola', surname: 'Tesla', job: 'Science'};
    let {name, surname} = obj;

    console.log("name = " + name);
    console.log("surname = " + surname);


