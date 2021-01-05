
    // Adding some integer data into an array between 1 and 20
    var arr = new Array(20);
    var rnd;
    var found;

    for (var i = 0; i < arr.length;){
        found = false;
        rnd = Math.round(Math.random()*19 + 1);
        for(var j = 0; j < arr.length; j++){
            if(arr[j] === rnd){
                found = true;
                break;
            }
        }

        if(!found){
            arr[i] = rnd;
            i++;
        }
    }

    console.log(arr);