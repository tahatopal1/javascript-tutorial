
    // With Object literal
    var A = {
        x: 12, // property x
        y: 24, // property y

        calculate: function (){
            return x * y;
        }
    };

    // Global Object
    var B = new Object();
    B.t = 5;
    B.z = 6;
    B.calc = function (){
        return t + z;
    }

    // Adding property and method
    var rectangle = function (){
        this.wid = 12;
        this.hei = 12;

        this.x = 5;
        this.y = 10;

    }

    var square1 = new rectangle();
    var square2 = new rectangle();

    // Constructor with parameters and a function

    var rectangle = function (wid, hei, x, y){
        this.wid = wid;
        this.hei = hei;
        this.x = x;
        this.y = y;

        this.area = function (){
            return this.wid * this.hei;
        }

    }

    // Constructor Pattern
    var square1 = new rectangle(12, 12, 5, 8);
    var square2 = new rectangle(24, 24, 4, 5);

    console.log("Area of square1: " + square1.area())
    console.log("Area of square2: " + square2.area())

    // Factory Pattern
    var triangle = function (wid, hei, x, y){
        var obj = new Object();
        obj.wid = wid;
        obj.hei = hei;
        obj.x = x;
        obj.y = y;

        obj.area = function (){
            return (obj.wid * obj.hei) / 2;
        }

        return obj;

    }

    var trngl = triangle(5, 10, 15, 15);
    console.log("area of triangle: " + trngl.area());
