
    // Constructor method defined by user
    var member = function (name, surname){
        this.name = name;
        this.surname = surname;
    }

    var obj = new Object(); // obj.constructor == Object
    var arr = new Array();  // arr.constructor == Array
    var mem = new member(); // mem.constructor == Function


    function A(x, y){
        this.x = x;
        this.y = y;
        this.calculate = function (){
            return this.x * this.y;
        }
    }

    var o1 = new A();

    // *************************************** //

    function T(x, y){
        this.x = x;
        this.y = y;

        this.calculate = function (){
            return this.x * this.y;
        }

    }

    function B(z){
        this.z = z;
    }

    B.prototype = new A(5, 10);

    var o1 = new A(10, 20);
    var o2 = new B(30);

    console.log(o2.x);
    console.log(o2.y);
    console.log(o2.z);

    console.log("o2 instance of A: " + (o2 instanceof A));
    console.log("o2 instance of B: " + (o2 instanceof B));
    console.log("o2 instance of Function: " + (o2 instanceof Function))
    console.log("o2 instance of Array: " + (o2 instanceof Array))

    // *** New Example *** ///

    console.log("New Example:");
    function C (){
        // Constructor method
    }

    C.prototype.x = 10;
    C.prototype.y = 20;
    C.prototype.calculate = function (){
        return this.x * this.y;
    }

    function D(z){
        this.z = z;
    }

    D.prototype = new C();
    var o3 = new C();
    var o4 = new D(30);

    console.log("o3.x = " + o3.x);
    console.log("o3.y = " + o3.y);

    console.log("o4.x = " + o4.x);
    console.log("o4.y = " + o4.y);
    console.log("o4.z = " + o4.z);

    // *** New Example *** ///

    console.log("New Example:");

    var E = {
        x: 10,
        y: 20,
        calculate: function (){
            return this.x * this.y;
        }
    }

    function F(z){
        this.z = z;
    }

    F.prototype = E;
    var o5 = new F(30);
    console.log("o5.x = " + o5.x);
    console.log("o5.y = " + o5.y);
    console.log("o5.z = " + o5.z);

    // *** New Example *** //
    console.log("Apply Example:");

    function K(x, y){
        this.x = x;
        this.y = y;
        this.calculate = function (){
            return this.x * this.y;
        }
    }

    function J(x, y, z){
        this.z = z;
        A.apply(this, arguments);
    }

    var o6 = new K(1, 2);
    var o7 = new J(3, 4, 5);

    console.log("o6.x = " + o6.x);
    console.log("o6.x = " + o6.y);

    console.log("o7.x = " + o7.x);
    console.log("o7.y = " + o7.y);
    console.log("o7.z = " + o7.z);
    console.log("o7.calculate = " + o7.calculate());

    // *** New Example *** //
    console.log("Call Example:");

    function P(x, y){
        this.x = x;
        this.y = y;

        this.calculate = function (){
            return this.x * this.y;
        }
    }

    function Q(a, b, z){
        this.z = z;
        A.call(this, a, b);
    }

    var o9 = new Q(3, 4, 5);
    console.log("o9.x = " + o9.x);
    console.log("o9.y = " + o9.y);
    console.log("o9.z = " + o9.z);
    console.log("o9.calculate = " + o9.calculate());




