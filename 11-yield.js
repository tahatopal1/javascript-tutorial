
    function* generator(){
        let x = yield "Hello";
        let y = yield "JavaScript";
        let z = yield "EcmaScript 6";
        return x * y * z;
    }

    let gen = generator();
    let yieldElm = gen.next(); // Asigning a generated element
    console.log(yieldElm);
    console.log(gen.next(5));
    console.log(gen.next(15));
    console.log(gen.next(20));

    console.log("***************")
    // This is how to reach generated element
    console.log("Done: " + yieldElm.done);
    console.log("Value: "+ yieldElm.value);