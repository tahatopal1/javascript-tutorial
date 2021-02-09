
    // JSON array

    let arrJSON = [
        {"name":"Cenk", "surname":"Tosun", "age": 29},
        {"name":"Merih", "surname":"Demiral", "age": 22},
        {"name":"Hakan", "surname":"Calhanoglu", "age": 27},
    ]

    for (let obj in arrJSON){
        let jsn = arrJSON[obj];
        for (let i in jsn){
            console.log(jsn[i]);
        }
    }

    // JSON as a JSON parameter

    var developer = {
        "name":"Taha",
        "surname":"Topal",
        "age":25,
        "technology":{"alias":"Java", "year":1995}
    }