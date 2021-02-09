
    function sample(x=5, y = 'string'){
        return "first parameter: " + x +  ", second parameter: " + y;
    }

    console.log("sample(): " + sample());
    console.log("sample(5): " + sample(10));
    console.log("sample('hello', 'world'): " + sample('hello', 'world'));

