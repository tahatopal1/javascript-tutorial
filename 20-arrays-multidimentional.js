
    var arr = new Array(new Array(1,2,3), new Array(6,7,8,9,10), new Array(11,12,13,14,15,30,40,50));
    var totalIteration = 0;

    for (var i = 0; i < arr.length; i++){

        var innerIteration = 0;

        for (var j = 0; j < arr[i].length; j++){
            totalIteration++;
            innerIteration++;

            console.log((j+1) + ". element of " + (i+1) + ". array: " + arr[i][j]);

            if (j == arr[i].length-1)
                console.log("Total iteration for this sub-array: " + innerIteration);

        }
    }

    console.log("Total iteration: " + totalIteration);