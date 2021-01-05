
    // hasOwnProperty(): Returns a boolean value if the object has the property
    var A = function (x){
        this.x = x;
    }

    var a = new A(10);
    console.log(a.hasOwnProperty("x")); // Returns true
    console.log(a.hasOwnProperty("constructor")); // Returns false
