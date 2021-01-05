
    var rand = function (x, y){
        return Math.ceil(Math.random() * (y - x ) + 5 )
    }

    console.log("This program will generate 10 random values between 5 and 35");
    for (var i = 0; i < 10; i++){
        console.log(i + ": " + rand(5, 35));
    }