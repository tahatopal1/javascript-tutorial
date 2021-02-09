
    // Object to JSON

    let obj, sendJSON, takeJSON, txt, localStorage;
    obj = {
        "firstName":"Elon",
        "lastName":"Musk",
        "age":5
    };

    sendJSON = JSON.stringify(obj);
    //window.location = "Json.php=json="+sendJSON;

    // JSON to object

    takeJSON = '{"firstName":"Jeff", "lastName":"Bezos"}';
    obj = JSON.parse(takeJSON);

    console.log(obj)

    // Usage of JSON object

    console.log("name: " + obj.firstName);
    console.log("surname: " + obj["lastName"]);



